package com.wipro.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.wipro.dto.Payment;
import com.wipro.entity.Order;
import com.wipro.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private RestTemplate restTemplate;
    @PostMapping
    public ResponseEntity<String> saveOrderDetails(@RequestBody Order order) {
        order.setOrderStatus("I"); 
        orderService.saveOrder(order);

        try {
            Payment payment = new Payment();
            payment.setOrderNumber(order.getOrderNumber());
            payment.setPaymentId("PAY12345");
            payment.setPaymentMode("CARD");
            payment.setAmount(order.getOrderValue());
            payment.setPaymentStatus(true);
            String paymentUrl = "http://payment-ms/payment";

            ResponseEntity<String> response = restTemplate.postForEntity(paymentUrl, payment, String.class);
            if (response.getStatusCode() == HttpStatus.CREATED) {
                order.setOrderStatus("P"); 
            } else {
                order.setOrderStatus("C"); 
            }

        } catch (Exception e) {
            order.setOrderStatus("C");
            e.printStackTrace();
        }

        orderService.saveOrder(order);
        return ResponseEntity.ok("Order processed with status: " + order.getOrderStatus());
    }
    @GetMapping
    public List<Order> findAllOrderDetails() {
        List<Order> list = orderService.findAllOrders();

        try {
        	String url = "http://payment-ms/payment";
        	ResponseEntity<Payment[]> response = restTemplate.getForEntity(url, Payment[].class);

            if (response.getStatusCode().value() == 200 ) {
                List<Payment> payments = Arrays.asList(response.getBody());

                for (Order order : list) {
                    List<Payment> payment = payments.stream()
                            .filter(p -> p.getOrderNumber().equals(order.getOrderNumber()))
                            .collect(Collectors.toList());
                    order.setPayment(payment); 
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

}

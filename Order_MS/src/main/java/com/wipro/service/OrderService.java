package com.wipro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.entity.Order;
import com.wipro.repo.OrderRepo;

@Service
public class OrderService implements OrderI {

	
	@Autowired
	 OrderRepo orderRepo;
	
	@Override
	public void saveOrder(Order order) 
	{
		orderRepo.save(order);
	}

	@Override
	public List<Order> findAllOrders() {
		
		return orderRepo.findAll();
	}

}

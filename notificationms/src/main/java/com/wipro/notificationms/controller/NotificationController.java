package com.wipro.notificationms.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.notificationms.dto.Notification;

@RestController
public class NotificationController {

	@PostMapping("/notify")
	public ResponseEntity<String> notify(@RequestBody Notification notification) {
	    System.out.println("== Notification Received ==");
	    System.out.println("User ID: " + notification.getUser().getId());
	    System.out.println("Username: " + notification.getUser().getUsername());
	    System.out.println("Action: " + notification.getAction());

	    return ResponseEntity.ok("Notification received successfully");
	}



	
	@GetMapping("/notify")
	public ResponseEntity<String> notifyTest() {
	    return ResponseEntity.ok("Notification service is running.");
	}



}

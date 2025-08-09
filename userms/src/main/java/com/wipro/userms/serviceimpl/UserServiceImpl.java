package com.wipro.userms.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wipro.userms.dto.Notification;
import com.wipro.userms.entity.User;
import com.wipro.userms.repo.UserRepo;
import com.wipro.userms.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo userRepo;
	
	@Autowired
	RestTemplate restTemplate;

	String NOTIFY_URL = "http://notificationms/notify";
	
	@Override
	public User createUser(User user) {
		
		User saved = userRepo.save(user);
        notify(saved, "Created");
		
		return saved;
	}

	@Override
	public User updateUser(User user) {
        User updated = userRepo.save(user);
        notify(updated, "Updated");
        return updated;
	}

	@Override
	public void deleteUser(int id) {
		Optional<User> optionalUser = userRepo.findById(id);
        optionalUser.ifPresent(user -> {
            userRepo.deleteById(id);
            notify(user, "Deleted");
        });
		
	}

	@Override
	public List<User> getAllUsers() {
		
		return userRepo.findAll();
	}

	@Override
	public User getUserById(int id) {
		
		return userRepo.findById(id).orElse(null);
	}
	
	private void notify(User user, String action) {
        Notification request = new Notification();
        request.setUser(user);
        request.setAction(action);

        // Send POST request to Notification MS
        ResponseEntity<String> response = restTemplate.postForEntity(NOTIFY_URL, request, String.class);
        System.out.println("Notification Response: " + response.getBody());
    }

}

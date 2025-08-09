package com.wipro.notificationms.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wipro.notificationms.model.User;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Notification {

	
	    private User user;
	    private String action;

	    public User getUser() {
	        return user;
	    }

	    public void setUser(User user) {
	        this.user = user;
	    }

	    public String getAction() {
	        return action;
	    }

	    public void setAction(String action) {
	        this.action = action;
	    }

}

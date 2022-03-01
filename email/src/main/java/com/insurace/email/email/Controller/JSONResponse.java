package com.insurace.email.email.Controller;

public class JSONResponse {
	boolean error;
	String response;
	public boolean isError() {
		return error;
	}
	public void setError(boolean error) {
		this.error = error;
	}
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
	}
	public JSONResponse(boolean error, String response) {
		super();
		this.error = error;
		this.response = response;
	}
}

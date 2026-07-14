package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START");
        LOGGER.debug("Authorization Header : {}", authHeader);

        String user = getUser(authHeader);
        String token = generateJwt(user);

        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        LOGGER.info("END");

        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.debug("Inside getUser()");

        String encodedCredentials = authHeader.substring(6);

        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        String credentials = new String(decodedBytes);

        LOGGER.debug("Decoded Credentials : {}", credentials);

        String user = credentials.split(":")[0];

        LOGGER.debug("User : {}", user);

        return user;
    }

    private String generateJwt(String user) {

        LOGGER.debug("Generating JWT for {}", user);

        JwtBuilder builder = Jwts.builder();

        builder.setSubject(user);

        builder.setIssuedAt(new Date());

        builder.setExpiration(new Date(System.currentTimeMillis() + 1200000));

        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        return builder.compact();
    }

}

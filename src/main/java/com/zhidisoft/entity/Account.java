package com.zhidisoft.entity;

/**
 * Created by lx on 2018/3/9.
 */
public class Account {

    private Integer id;
    private String name;
    private Double balance;

    public Account() {
    }

    public Account(String name, Double balance) {
        this.name = name;
        this.balance = balance;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }
}

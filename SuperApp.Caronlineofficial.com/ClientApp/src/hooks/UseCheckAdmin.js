import React from 'react'
import jwt_decode from "jwt-decode";

export default function UseCheckAdmin() {
    var token = localStorage.getItem("token");
    if (token) {
        try {
            var result = jwt_decode(token);
            return result["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].includes("Admin");
        } catch (error) {
            return false;
        }
    } else {
        return false
    }
}


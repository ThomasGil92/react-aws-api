const express = require("express");
const router = express.Router();
const {
    register,
    registerActivate,
    login,
    forgotPassword,
    resetPassword
} = require("../controllers/auth");
//validators
const {
    userRegisterValidator,
    userLoginValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/register", userRegisterValidator, runValidation, register);
router.post("/login", userLoginValidator, runValidation, login);
router.post("/register/activate", registerActivate);
router.put("/forgot-password", forgotPasswordValidator, runValidation, forgotPassword);
router.put("/reset-password", resetPasswordValidator, runValidation, resetPassword);
/* router.get('/secret',requireSignin,(req,res)=>{
    res.json({
        data:'this a secret'
    })
}) */

module.exports = router;

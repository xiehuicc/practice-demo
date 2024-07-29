package main

import(
	"net/http"
	"github.com/gin-gonic/gin"
)

// 定义接受的数据结构体
type Login struct {
	// binding:"required"修饰的字段，若接收为空值，则报错，是必须字段
	User string `form:"username" json:"user" uri:"user" xml:"user" binding:"required"`
	Password string `form:"password" json:"password" uri:"password" xml:"password" binding:"required"`
}

func demo1() {
	r := gin.Default()
	r.POST("loginJSON", func(c *gin.Context){
		var json Login
		// 将request body中的数据，自动按照json格式解析到结构体中
		if err := c.ShouldBindBodyWithJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		if json.User != "root" || json.Password != "admin" {
			c.JSON(http.StatusBadRequest, gin.H{"status": 304})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": 200})
	})
	r.Run(":8000")
}
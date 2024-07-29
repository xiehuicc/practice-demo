package main

import (
	"net/http"
	"strings"
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	r.GET("/", func(c *gin.Context){
		c.String(http.StatusOK, "hello world")
	})

	r.GET("/user/:name/*action", func(c *gin.Context){
		name :=c.Param("name")
		action :=c.Param("action")
		// 截取
		action = strings.Trim(action, "/")
		c.String(http.StatusOK, name + "is " + action)
	})

	r.GET("/user", func(c *gin.Context){
		name :=c.DefaultQuery("name", "名字")	// 指定默认值
		c.String(http.StatusOK, name)	
	})

	// 提交表单
	r.POST("/from", func (c *gin.Context)  {
		types := c.DefaultPostForm("types", "post")
		username := c.PostForm("username")
		password := c.PostForm("password")
		fmt.Printf("username:%s, password:%s",username, password)
		c.String(http.StatusOK, fmt.Sprintf("username:%s,password:%s,type:%s", username, password, types))
	})
  //限制上传最大尺寸, << 位运算符，表示左移20位，即8的二进制1000在右边添加20个0, 1M = 2^20(字节)
	r.MaxMultipartMemory = 8 << 20 // 8M
	// 上传单个文件
	r.POST("/upload", func(c *gin.Context) {
		file, err := c.FormFile("file")
		if err != nil {
			c.String(500, "上传文件出错")
		}
		// c.JSON（200, gin.H{"message": "file.Header.Context"})
		c.SaveUploadedFile(file, file.Filename)
		c.String(http.StatusOK, file.Filename)
	})

	// 上传多个文件
	r.POST("/uploadMore", func(ctx *gin.Context) {
		from, err := ctx.MultipartForm()
		if err != nil {
			ctx.String(http.StatusBadRequest, fmt.Sprintf("get err %s", err.Error()))
		}
		// 获取所有图片
		files := from.File["files"]
		// 遍历所有图片
		for _, file := range files {
			if err:=ctx.SaveUploadedFile(file, file.Filename); err != nil {
				ctx.String(http.StatusBadRequest, fmt.Sprintf("upload err %s", err.Error()))
				return
			}
		}
		ctx.String(200, fmt.Sprintf("upload ok %d files", len(files)))
	})
	printHelp()	// 调用其他文件的函数，运行go.run . 会编译该目录下的所有文件
	r.Run(":8888")
}

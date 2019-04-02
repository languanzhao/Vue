const express = require('express')
const app = express()
var discountJson = require('./src/data/discount.json')      //注：
var homeJson = require("./src/data/home.json")              //注：
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {                                          //手机转换尺寸rem / px
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    },
    devServer: {
		before(app) {
			app.get('/api/discountJson', function(req, res){       //注：
				res.json({
					errno: 0, 
					data: discountJson                                 //注：
				})
            }),
            app.get('/api/homeJson', function(req, res){
				res.json({
					errno: 0,
					data: homeJson
				})
            })
           
		},
		host: '0.0.0.0',     //手机端查看 自动匹配识别ip地址
		port: 8080           //端口号
	}
}

import React, { useContext, useState } from 'react'
import { login } from "../services"
import { Form, Input } from "antd"
import { Context } from "../context"


let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = process.env.FRONTENDPOINT)
  : (baseURL = "http://localhost:3000")


const Login = ({history}) => {
	const [form] = Form.useForm();
	const { loginUser, user } = useContext(Context)

	async function onFinish(values){
		const {data : {user}} = await login(values).catch(err => {
							console.dir(err.response.data.message)
		})
		delete user.password;
		loginUser(user)
		history.push("/profile")
	}

	return (
		<div>
			<Form form={form} onFinish={onFinish} >
				<Form.Item label="Your email" name="email" rules={[{ required: true, message: "Plase input your email." }]}>
					<input />
				</Form.Item>
				
				<Form.Item label="Password" name="password" rules={[{ required: true, message: "Plase input your password." }]}>
					<Input.Password />
				</Form.Item>
				<button htmlType='submit'>Login</button>
			</Form>
		</div>
	)
}

export default Login
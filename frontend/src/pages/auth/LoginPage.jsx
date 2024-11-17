import { useState } from "react";
import Button from "../../component/Button";
import fevicon1 from "../../assets/loginImg/loginImg.png";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginPage = () => {
	const [formData, setFormData] = useState({
		rollNo: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const isError = false;

	return (
		<div className='max-w-screen-xl mx-auto mt-0 flex h-screen px-10'>
			<div className='flex-1 hidden lg:flex items-center  justify-center'>
				
			<Link to="/">
            <img
                    className="w-full  h-full object-cover "
                    src={fevicon1}
                    alt="buddyForum"
                  />
			</Link>
			</div>
			<div className='flex-1 flex flex-col justify-center items-center bg-n-8'>
				<form className='lg:w-2/3 flex gap-4 flex-col bg-n-8' onSubmit={handleSubmit}>
                <img
                    className="w-24 lg:hidden object-cover"
                    src={fevicon1}
                    alt="buddyForum"
                  />
					<h1 className='text-4xl font-extrabold text-white'>{"Let's"} go.</h1>
					<label className='input border-n-1/10 rounded flex items-center bg-n-8 gap-2'>
                         <FaUser />
						<input
							type='text'
							className='grow'
							placeholder='Roll No'
							name='rollNo'
							onChange={handleInputChange}
							value={formData.username}
						/>
					</label>

					<label className='input border-n-1/10 rounded flex items-center bg-n-8 gap-2'>
						<MdPassword />
						<input
							type='password'
							className='grow'
							placeholder='Password'
							name='password'
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>
                    <Button href="/complain" className='animate-slideUp' white>
                        Login 
                    </Button>
                    {isError && <p className='text-red-500'>Something went wrong</p>}
					<p className='text-white text-lg'>{"Don't"} have an account?</p>
                    <Button href="/signup" className='animate-slideUp' >
                        Sign Up
                    </Button>
            	</form>
				
			</div>
		</div>
	);
};
export default LoginPage;
// import { useState } from 'react';
// function Login() {
//     const [inputs, setInputs] = useState({});
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />;
//         <input type="text" name="pass" value={inputs.pass || ""} onChange={handleChange}   />;
//         setInputs(values => ({ ...values, [name]: value }))
        
//     }
//     const [isCheck, setCheck] = useState(false);
//     const handleChecked = () => {
//         <input type="checkbox" checked={isCheck} onChange={handleChecked}/>
//         setCheck(!isCheck)
//     }
//     const handleSubmit = () => {
//         console.log("Dữ liệu đăng nhập:", inputs); // Log dữ liệu inputs
//         console.log("Is Admin?", isCheck); // Log trạng thái checkbox

//     }
//     return (
//         <form onSubmit={handleSubmit}>
//                 <label>Enter your username:
//                     <input type="text" name="username"/>
//                 </label><br/>
//                 <label>Enter your password:
//                     <input type="text" name="pass"/>
//                 </label><br/>
//                 <label>
//                     <input type="checkbox"/>Is Admin?
//                 </label><br/>
//                <button>Đăng nhập</button>
//         </form>
                    
//         )
        
//     } 
// export default Login
import { useState } from 'react';

function Login() {
  // Tạo state cho form inputs
  const [inputs, setInputs] = useState({});
  const [isCheck, setCheck] = useState(false);

  // Hàm xử lý khi có thay đổi trong input fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Hàm xử lý khi checkbox được click
  const handleChecked = () => {
    setCheck(!isCheck);
  };

  // Hàm xử lý khi nhấn nút "Đăng nhập"
  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn không cho form gửi và làm mới trang
    console.log("Dữ liệu đăng nhập:", inputs); // Log dữ liệu inputs
    console.log("Is Admin?", isCheck); // Log trạng thái checkbox
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your username:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label><br />
      
      <label>Enter your password:
        <input
          type="password"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
        />
      </label><br />
      
      <label>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={handleChecked}
        /> Is Admin?
      </label><br />
      
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default Login;
    
    
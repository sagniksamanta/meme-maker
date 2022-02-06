import React , {useState , useEffect} from "react";
import User_nav from "./User_nav";
import Footer from "./Footer";
import { useSelector , useDispatch } from "react-redux";
import { deldata } from "../action/index";
import { useNavigate } from "react-router-dom";
import Lguser from "./Lguser";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileBase64 from 'react-file-base64';


const User = () => {
    const initialData = {id:'' , image:''};
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [memeUpload , setmemeUpload] = useState([]);
    const [fileBase64String , setFileBase64String] = useState(initialData);


    //const myState = useSelector((state)=> state.save_dal_data);

    //console.log(user);
    // useEffect(() => {
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    //     dispatch(svdata(user));
    //   })

   const logout = ()=> {
        dispatch(deldata());
        navigate('/login');
        
   }

   const onFileChange = (ev) => {
       setmemeUpload(ev.target.files[0]);
       console.log(ev.target.files[0].name);
       console.log(ev.target.files[0].size);
       console.log(ev.target.files[0]);
      
   } 

   const encodeFile = async(e) => {
       //e.preventdefault();
       const id = fileBase64String.id;
       const image = fileBase64String.image;
       const res = await fetch("/user", {
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        }, 
        body:JSON.stringify({
            id , image
        })
    });


    const data = await res.json();
    //console.log(data);
    if(data.status > 400 || !data){
        console.log("no meme uploaded  ");

    }else{
        console.log(" meme uploaded successfully !!");
        
        
    }


}

   //console.log(fileBase64String.image);
   
    return (
        <>

        { user == null ?
        
        <div className="body">
            <User_nav />
            

            <h1>plz go to login page</h1>
            

            <Footer />
            
        </div>
        :
        <div className="body">
            <Lguser
                fun = {logout}
            />
            <h1> Welcome <b style={{"color":"darkgreen"}}>{user.fname}</b></h1>
            <br></br>
            <div className="c_div">
            
            <h2>Upload Your  <b style={{"color":"darkgreen"}}>memes</b> here </h2>
            <br></br>
            
            <FileBase64
            multiple={ false }
            onChange={onFileChange}
            onDone={({base64}) => setFileBase64String({...fileBase64String,id: user._id, image: base64})}
            />

            <button type="button" class="btn btn-outline-success" onSubmit={encodeFile()}>  <FileUploadIcon/></button>
            </div>

            
            <Footer/>
        
        </div>

      
        
         }

       
           
            
        </>
    )
}

export default User;












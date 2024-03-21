import { Bounce, toast } from "react-toastify";

const success = (msg) => toast.success(msg, {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
});

const error = (msg) => toast.error(msg, {
position: "bottom-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});


export default { success, error }
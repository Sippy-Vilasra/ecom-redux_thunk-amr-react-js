
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";


// export default function PopUp() {

//     confirmAlert({
//         title: "This item Cart to Remove",
//         message: "Are you sure to do this.",
//         buttons: [
//             {
//                 label: "Yes",
//                 onClick: () => ("Click Yes")
//             },
//             {
//                 label: "No",
//                 onClick: () => ("Click No")
//             }
//         ]
//     });
// };


import Swal from 'sweetalert2'

export const PopUp = () => {
    let respon = 0
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            respon = 1
            // Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            // )
        }
        console.log(respon, 'respon')
        return respon
    })
}

import { useForm } from "react-hook-form";

export function CreateUser() {

    // ------- 3. using useForm React Hook
    const {
        register,       // to attrack changes of form inputs
        handleSubmit,   // onSubmit event handler
        // add validators
    } = useForm();

    const add = (user) => {
        console.log("Added!", user);
    }

    return (
        <div className="CreateUser">
            <h1>Create New User</h1>
            <form onSubmit={handleSubmit(add)}>
                <label>
                    <span>Username:</span>
                    <input {...register("username")} type="text" />
                </label>
                <label>
                    <span>Address:</span>
                    <input {...register("address")} type="text" />
                </label>
                <label>
                    <span>Admin:</span>
                    <input {...register("admin")} type="checkbox" />
                </label>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}
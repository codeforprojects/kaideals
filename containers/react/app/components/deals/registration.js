import React, {Component} from "react";
 class Registration extends Component {

    render() {

        return (
                <div className="form-div-center">
                    <form>
                            <label>
                                Restaurant Name:
                            <input type="text" name="restaurantName"  />
                            </label>
                        <label>
                            Email:
                            <input type="text" name="email"  />
                        </label>

                        <label>
                            Phone number:
                            <input type="text" name="phoneNumber"  />
                        </label>
                            <button type="submit" className="btn btn-lg  btn-primary" >Login</button>
                    </form>
            </div>
        );
    }
}

export default Registration
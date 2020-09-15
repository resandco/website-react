import React, {Component} from 'react';
import SignUpBox from "../components/other/account/SignUpBox";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Newsletter from "../components/other/cta/Newsletter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class SignUp extends Component {
    state = {
        breadcrumbimg: require('../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="signup-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Sign Up" img={this.state.breadcrumbimg} />

                <section className="form-shared padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <SignUpBox title="Create an account!" subtitle="with your social network" />
                            </div>
                        </div>
                    </div>
                </section>


            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
                
            </main>
        );
    }
}

export default SignUp;
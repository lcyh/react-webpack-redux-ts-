import React, {PureComponent} from 'react';
import success from 'images/pay_success.png';

export default class Page extends PureComponent {
    render() {
        return (
            <div>
                this is Page~
                
                <img src={success} className="img-responsive" alt="Image"/>

            </div>
        )
    }
}

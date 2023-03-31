import React from 'react';

class MyButton extends React.Component {
 
  render() {
      return (
        <div>
            <button>
                {this.props.textButton}
            </button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod, veritatis molestias illum dolore odit vel soluta officia dolorem illo minima voluptate culpa, nihil maiores obcaecati voluptatem quam explicabo maxime!
            </p>
              
        </div>
      
    );
  }
}

export default MyButton;

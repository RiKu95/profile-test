import React from 'react';
import { Drawer, Icon, Button } from 'antd';
import ProfileForm from './ProfileForm'



class DrawerElement extends React.Component {
  constructor(){
    super();
    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };



  render() {

    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> create profile
        </Button>
        <Drawer
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: 'auto',
            height: 'calc(100% - 108px)',
            paddingBottom: '108px',
            textAlign: 'center',
          }}
        >
              <ProfileForm onClose= {this.onclose} />
        </Drawer>
      </div>
    );
  }
}



export default DrawerElement;

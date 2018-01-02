import {Component} from 'react';
// import {SideBar} from 'containers/sideBar';
import {Navbar,FormControl,Menu,Badge,Icon,Breadcrumb} from 'tinper-bee';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuToggle = Menu.MenuToggle;
const SideContainer = Menu.SideContainer;
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;

export default class App extends Component {
    constructor(props, context) {
          super(props, context);
          this.state = {
            selectedkey: 1,
            expanded: false,
            currentArray: [],
            openKeys: []
          }
          this.myfilter = this.myfilter.bind(this);
    }
    handleSelect(index) {
        this.setState({selectedkey: index});
    }

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        console.log('Clicked: ', e.key);
        this.setState({current: e.key});
    }
    onOpenChange(openKeys) {
        const state = this.state;
        const latestOpenKey = this.myfilter(openKeys,state.openKeys);
        const latestCloseKey = this.myfilter(state.openKeys,openKeys);

         /*   const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
            const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));*/

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            this.state.currentArray.push(latestCloseKey);
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({openKeys: nextOpenKeys});
    }
    //IE下 array.find（）方法不可用
    myfilter(arr1,arr2) {
        if(arr2.length == 0 || !arr2) {
            return arr1[0];
        }

        for(var i=0;i<arr1.length;i++)
        {
          if(arr2.indexOf(arr1[i].toString())==-1)
          {
                return arr1[i];
          }
        }
        return false;
    }
    getAncestorKeys(key) {

        const map = {
            "子项": ['组织2'],
        };

        return map[key] || [];
    }

    renderBreadcrumb = () => {
        let currentArray = this.state.currentArray;
        let BreadcrumbDom = [];
        this.state.openKeys.map(function(item,index) {
            BreadcrumbDom.push(<Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
        })
        BreadcrumbDom.push(<Breadcrumb.Item active>{this.state.current}</Breadcrumb.Item>)
        return <Breadcrumb>{BreadcrumbDom}</Breadcrumb>;

    }
    render() {
        return (<div id="demo5">
                <Navbar fluid expanded={this.state.expanded} onToggle={this.onToggle}>
                    <Nav pullRight>
                        <NavItem eventKey={3} className="icon-nav">
                            <a href="http://tinper.org" target="_blank"> <Icon type="uf uf-qm-c"></Icon> 帮助 </a>
                            <a className="" href="#">
                                <img alt="" className="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/3817644?s=460&v=4" height="20" width="20" />
                                Ycc
                            </a>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="content">
                    <div className="sider-menu">
                        <div className="logo-header">
                            <a href="#"><img style={{width:140}} src="//tinper.org/assets/images/tinperlogos32.png"/></a>
                        </div>
                        <Menu mode="inline" className="wrapper-menu" openKeys={this.state.openKeys} selectedKeys={[this.state.current]} style={{ width: 240 }} onOpenChange={this.onOpenChange.bind(this)} style={{ width: 240 }}  onClick={this.handleClick.bind(this)}>
                            <SubMenu key="operation" title={<span><span>操作</span></span>}>
                                <Menu.Item key="home">主页</Menu.Item>
                                <Menu.Item key="shopping cart">购物车</Menu.Item>
                                <Menu.Item key="purchase record">购买记录</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="inner-container">
                        {this.state.current && <Breadcrumb>{this.renderBreadcrumb()}</Breadcrumb>}
                        <div className="inner-content"></div>
                    </div>
                </div>
            </div>)
    }
}

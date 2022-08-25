import Profile from "./Profile";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

interface SideBarProps {
	activeMenu: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout';
 }
export default function SideBar(props:SideBarProps) {
	const {activeMenu} = props;
	return (
		<>
			<section className="sidebar">
				<div className="content pt-50 pb-30 ps-30">
					<Profile />
					<div className="menus">
						<MenuItem title="Overview" icon="ic-menu-overview" href="/member" active={activeMenu === 'overview'} />
						<MenuItem title="Transactions" icon="ic-menu-transaction" href="/member/transactions" active={activeMenu === 'transactions'}/>
						<MenuItem title="Messages" icon="ic-menu-message" href="/member" />
						<MenuItem title="Card" icon="ic-menu-card" href="/member" />
						<MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
						<MenuItem title="Settings" icon="ic-menu-setting" href="/member/edit-profile" active={activeMenu === 'settings'} />
						<MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
					</div>
					<Footer />
				</div>
			</section>
		</>
	);
}

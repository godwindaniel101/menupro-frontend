import { MenuItemT } from "../types/types";
import ModalWrapper from "./ModalWrapper";

type MenuModalProps = {
	openMenuModal: boolean;
	setOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
	item: MenuItemT | null;
};

const MenuModal = ({
	openMenuModal,
	setOpenMenuModal,
	item,
}: MenuModalProps) => {
	return (
		<ModalWrapper isOpen={openMenuModal} setIsOpen={setOpenMenuModal}>
			<div className="p-6 flex flex-col gap-2">
				<h3 className="font-bold text-neutral-300">
					{item?.item_name.toUpperCase()}
				</h3>
				<p className="text-[14px] text-neutral-400">{item?.item_description}</p>
				<p className="text-light-teal text-[15px]">
					<span className="text-[12px]">₦</span>
					{item?.item_amount}
				</p>
			</div>
		</ModalWrapper>
	);
};

export default MenuModal;

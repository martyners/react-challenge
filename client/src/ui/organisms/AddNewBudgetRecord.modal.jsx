import { Modal } from "ui/molecules/Modal";

export function AddNewBudgetRecord({ open, onClose, onSubmit, title, children }) {
    return (<Modal
         open = {open}
         onClose={onClose}
         onSubmit={onSubmit}
         description={title}
        >{children}</Modal>);
}
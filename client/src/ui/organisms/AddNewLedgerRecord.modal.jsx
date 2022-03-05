import { Modal } from "ui/molecules/Modal";

export function AddNewLedgerRecord({ open, onClose, onSubmit, type, children }) {
    const titleContent = (type) => {
        if (type === "INCOME") {
            return "Dodaj wpływ"
        } else if (type === "EXPENSE") {
            return "Dodaj wydatek"
        }
    }
    return (<Modal
        open={open}
        onClose={onClose}
        onSubmit={onSubmit}
        description={titleContent(type)}
    >
        {children}
    </Modal>);

}
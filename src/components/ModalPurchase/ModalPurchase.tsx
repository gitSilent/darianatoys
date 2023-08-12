import React, { Dispatch, SetStateAction } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { IUserOrder } from '../../types/types';
import Modal from '../Modal/Modal'
import LeaveReviewField from './LeaveReviewField/LeaveReviewField';

interface IProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    purchaseInfo: IUserOrder | undefined
}

export default function ModalPurchase({ active, setActive, purchaseInfo }: IProps) {
  
    return (
        <div>
            <Modal active={active} setActive={setActive}>
                <ToastContainer />

                <div >
                    {purchaseInfo?.items.map((item, idx) => {
                        return (
                           <LeaveReviewField item={item} idx={idx} status={purchaseInfo.status}/>
                        )
                    })}
                </div>
            </Modal>
        </div>
    )
}

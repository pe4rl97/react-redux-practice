import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bankActionCreators from '../store/bank/actionCreators';
import { RootState } from '../store/store';
import { Button } from 'react-bootstrap';

const Bank = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(bankActionCreators, dispatch);
    const amountState = useSelector((state: RootState) => state.bank)

    return (
        <>
            <h1 className='my-3'>{amountState}</h1>
            <Button variant='secondary' className='me-2' onClick={() => depositMoney(1000)}>Deposit</Button>
            <Button variant='secondary' className='mx-2' onClick={() => withdrawMoney(1000)}>Withdraw</Button>
            <Button variant='secondary' className='mx-2' onClick={() => bankrupt()}>Bankrupt</Button>
        </>
    )
}

export default Bank
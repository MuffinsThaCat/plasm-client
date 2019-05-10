// @ts-check
// Import the API
import BN from 'bn.js';

const { BlockNumber, Vector, AccountId, u32, Hash, Struct, Signature, Tuple, u64, u128, Option } = require('@polkadot/types');

export class Value extends u128 {}

export class TransactionInput extends Struct {
    constructor (value?: any) {
        super({
        txHash: Hash,
        outIndex: u32
        }, value)
    }
}
export class TxIn extends TransactionInput {}

export class TransactionOutput extends Struct {
    constructor (value?: any) {
        super({
        value: u128,
        keys:  Vector.with(AccountId),
        quorum: u32
        }, value)
    }
}
export class TxOut extends TransactionOutput {}

export class Transaction extends Struct {
    constructor (value?: any) {
        super({
        inputs: Vector.with(TransactionInput),
        outputs: Vector.with(TransactionOutput),
        lock_time: BlockNumber,
        }, value)
    }
}

export class Tx extends Transaction {}

export class SignedTransaction extends Struct {
    constructor (value?: any) {
        super({
        payload: Option.with(Transaction),
        signatures: Vector.with(Signature),
        public_keys: Vector.with(AccountId)
        }, value)
    }
}

export class SignedTx extends SignedTransaction {}
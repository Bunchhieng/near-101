## Steps to work with NEAR:

1. LOGIN: `near login`
2. CREATE SUB-ACCOUNT: `near create-account mycontract.satoshibun.testnet --masterAccount satoshibun.testnet --initialBalance 5`
3. BUILD: `yarn asb`
4. DEPLOY: `near deploy --accountId=mycontract.satoshibun.testnet --wasmFile=build/release/near-marketplace-contract.wasm`
5. CALL CHANGE: `near call mycontract.satoshibun.testnet setProduct '{"id": "0", "productName": "bun"}' --accountId=satoshibun.testnet`
6. CALL VIEW: `near view mycontract.satoshibun.testnet getProduct '{"id": "0"}'`
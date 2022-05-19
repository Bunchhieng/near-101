## Build project for M1 MAC

1. `yarn --ignore-scripts`
2. `yarn asb`
3. `yarn deploy`

## Steps to work with NEAR:

1. LOGIN: `near login`
2. CREATE SUB-ACCOUNT: `near create-account mycontract.satoshibun.testnet --masterAccount satoshibun.testnet --initialBalance 5`
3. BUILD: `yarn asb`
4. DEPLOY: `near deploy --accountId=mycontract.satoshibun.testnet --wasmFile=build/release/near-marketplace-contract.wasm`
5. CALL CHANGE: `near call mycontract.satoshibun.testnet setProduct '{"product": {"id": "0", "name": "BBQ", "description": "Grilled chicken and beef served with vegetables and chips.", "location": "Berlin, Germany", "price": "1000000000000000000000000", "image": "https://i.imgur.com/yPreV19.png"}}' --accountId=satoshibun.testnet`
6. CALL VIEW: `near view mycontract.satoshibun.testnet getProduct '{"id": "0"}'`

## Notes
- Create new sub-account for buying product: `near create-account buyeraccount.satoshibun.testnet --masterAccount satoshibun.testnet --initialBalance 6`
- Buy product: `near call mycontract.satoshibun.testnet buyProduct '{"productId": "0"}' --depositYocto=1000000000000000000000000 --accountId=buyeraccount.satoshibun.testnet`
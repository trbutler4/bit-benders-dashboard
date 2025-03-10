## Bit Benders Dashboard
Dashboard for all things Bit Benders

# Demo schema 
demo schema can be found at: https://schema-builder.polygonid.me/schemas/74f4b6a3-5fcd-4d27-8241-b3cb914921a2
claim link: https://user-ui:password-ui@issuer-ui.polygonid.me/credentials/scan-link/d8e073b9-5924-44f1-b2ba-64cc0a4fae38

# Polgon ID JS-SDK
- repo: https://github.com/0xPolygonID/js-sdk
- docs: https://0xpolygonid.github.io/js-sdk-tutorials/
- example repository: https://github.com/0xPolygonID/js-sdk-examples



# Setup

1. Download the zk circuits into `./circuits` by running `dl_circuits.sh`. This will download the latest files from `https://iden3-circuits-bucket.s3.eu-west-1.amazonaws.com/latest.zip`

    ```bash
    ./dl_circuits.sh
    ```

2. Copy over the `.env.example` into `.env`  
  You'll need to fill in `RPC_URL` and `WALLET_KEY` with your own endpoint and key respectively. The default env vars assume you will be using the Polygon Mumbai network.

    ```bash
    cp .env.example .env
    ```

    `example.env`

    ```bash
    # reverse hash service url
    RHS_URL="https://rhs-staging.polygonid.me" 
    # state v2 contract address in the mumbai network
    CONTRACT_ADDRESS="0x134B1BE34911E39A8397ec6289782989729807a4"
    # path to the circuits folder
    CIRCUITS_PATH="./circuits" 
    # url to polygon mumbai network rpc node
    RPC_URL="" 
    # key in hex format with matic balance
    WALLET_KEY="" 
    # MongoDB connection string, uses in memory Mongo server if not specified
    MONGO_DB_CONNECTION=""

    ```

3. Install dependencies

    ```bash
    yarn install 
    ```


# Issuer Node Setup 

follow docker instructions in issuer-node/README.md
- onchain issuer 

#!/bin/bash

beth_address=`truffle migrate --reset | sed -n 's/[[:space:]]*Beth:[[:space:]]*//p'`
sed -i -e "s/\(REACT_APP_BETH_ADDRESS=\).*/\1${beth_address}/g" '.env.local'
echo "BethAddres: ${beth_address}"

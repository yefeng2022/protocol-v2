/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from 'ethers';
import {Provider, TransactionRequest} from '@ethersproject/providers';
import {Contract, ContractFactory, Overrides} from '@ethersproject/contracts';

import {MockVariableDebtToken} from './MockVariableDebtToken';

export class MockVariableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<MockVariableDebtToken> {
    return super.deploy(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      overrides || {}
    ) as Promise<MockVariableDebtToken>;
  }
  getDeployTransaction(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      overrides || {}
    );
  }
  attach(address: string): MockVariableDebtToken {
    return super.attach(address) as MockVariableDebtToken;
  }
  connect(signer: Signer): MockVariableDebtTokenFactory {
    return super.connect(signer) as MockVariableDebtTokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockVariableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as MockVariableDebtToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_underlyingAssetAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_tokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_tokenSymbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'BurnDebt',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'MintDebt',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEBT_TOKEN_REVISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'principalBalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'underlyingAssetAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60c0604052600080553480156200001557600080fd5b506040516200158b3803806200158b833981810160405260808110156200003b57600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006757600080fd5b9083019060208201858111156200007d57600080fd5b82516401000000008111828201881017156200009857600080fd5b82525081516020918201929091019080838360005b83811015620000c7578181015183820152602001620000ad565b50505050905090810190601f168015620000f55780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011957600080fd5b9083019060208201858111156200012f57600080fd5b82516401000000008111828201881017156200014a57600080fd5b82525081516020918201929091019080838360005b83811015620001795781810151838201526020016200015f565b50505050905090810190601f168015620001a75780820380516001836020036101000a031916815260200191505b506040525050506001600160601b0319606085811b821660a05284901b16608052815184908490849084908490849084908490620001ed90603590602085019062000216565b5080516200020390603690602084019062000216565b50505050505050505050505050620002bb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025957805160ff191683800117855562000289565b8280016001018555821562000289579182015b82811115620002895782518255916020019190600101906200026c565b50620002979291506200029b565b5090565b620002b891905b80821115620002975760008155600101620002a2565b90565b60805160601c60a05160601c611283620003086000398061076952806107f7528061098b5280610b0a5280610bbf52508061082652806109ba5280610a7c5280610bee52506112836000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806389d1a0fc116100a2578063a9059cbb11610071578063a9059cbb14610455578063b9a7b62214610481578063c634dfaa14610489578063dd62ed3e146104af578063ee9907a4146104dd57610116565b806389d1a0fc146103fd57806395d89b41146104215780639dc29fac14610429578063a457c2d71461037f57610116565b80633118724e116100e95780633118724e14610228578063313ce56714610361578063395093511461037f57806340c10f19146103ab57806370a08231146103d757610116565b806306fdde031461011b578063095ea7b31461019857806318160ddd146101d857806323b872dd146101f2575b600080fd5b610123610503565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015d578181015183820152602001610145565b50505050905090810190601f16801561018a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c4600480360360408110156101ae57600080fd5b506001600160a01b03813516906020013561059a565b604080519115158252519081900360200190f35b6101e06105e2565b60408051918252519081900360200190f35b6101c46004803603606081101561020857600080fd5b506001600160a01b038135811691602081013590911690604001356105e8565b61035f6004803603606081101561023e57600080fd5b60ff823516919081019060408101602082013564010000000081111561026357600080fd5b82018360208201111561027557600080fd5b8035906020019184600183028401116401000000008311171561029757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156102ea57600080fd5b8201836020820111156102fc57600080fd5b8035906020019184600183028401116401000000008311171561031e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610630945050505050565b005b610369610706565b6040805160ff9092168252519081900360200190f35b6101c46004803603604081101561039557600080fd5b506001600160a01b03813516906020013561070f565b61035f600480360360408110156103c157600080fd5b506001600160a01b03813516906020013561075e565b6101e0600480360360208110156103ed57600080fd5b50356001600160a01b0316610932565b610405610a7a565b604080516001600160a01b039092168252519081900360200190f35b610123610a9e565b61035f6004803603604081101561043f57600080fd5b506001600160a01b038135169060200135610aff565b6101c46004803603604081101561046b57600080fd5b506001600160a01b0381351690602001356105e8565b6101e0610cf9565b6101e06004803603602081101561049f57600080fd5b50356001600160a01b0316610cfe565b6101e0600480360360408110156104c557600080fd5b506001600160a01b038135811691602001351661070f565b6101e0600480360360208110156104f357600080fd5b50356001600160a01b0316610d19565b60358054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561058f5780601f106105645761010080835404028352916020019161058f565b820191906000526020600020905b81548152906001019060200180831161057257829003601f168201915b505050505090505b90565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60345490565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b600061063a610d34565b60015490915060ff16806106515750610651610d39565b8061065d575060005481115b6106985760405162461bcd60e51b815260040180806020018281038252602e8152602001806111ee602e913960400191505060405180910390fd5b60015460ff161580156106b7576001805460ff19168117905560008290555b83516106ca906035906020870190611134565b5082516106de906036906020860190611134565b506037805460ff191660ff871617905580156106ff576001805460ff191690555b5050505050565b60375460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107c55760405162461bcd60e51b815260040180806020018281038252603281526020018061121c6032913960400191505060405180910390fd5b60008060006107d385610d3f565b919450925090506107f3856107ee868463ffffffff610daf16565b610e12565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561088b57600080fd5b505afa15801561089f573d6000803e3d6000fd5b505050506040513d60208110156108b557600080fd5b50516001600160a01b03871660008181526039602090815260409182902084905581519283528201889052818101879052606082018690526080820185905260a08201839052519192507fc708ddc24a0625b804da52a08c253ca50b419927852ddd8a31149253369413b4919081900360c00190a1505050505050565b6001600160a01b0381166000908152603860205260408120548061095a576000915050610a75565b610a71610a6c60396000866001600160a01b03166001600160a01b0316815260200190815260200160002054610a607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610a1f57600080fd5b505afa158015610a33573d6000803e3d6000fd5b505050506040513d6020811015610a4957600080fd5b5051610a5486610e71565b9063ffffffff610e8716565b9063ffffffff610ecb16565b610f03565b9150505b919050565b7f000000000000000000000000000000000000000000000000000000000000000090565b60368054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561058f5780601f106105645761010080835404028352916020019161058f565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b665760405162461bcd60e51b815260040180806020018281038252603281526020018061121c6032913960400191505060405180910390fd5b6000806000610b7485610d3f565b92509250925083811115610b9b57610b96856107ee838763ffffffff610f1c16565b610bb4565b610bb485610baf868463ffffffff610f1c16565b610f5e565b6000828514610c82577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610c5357600080fd5b505afa158015610c67573d6000803e3d6000fd5b505050506040513d6020811015610c7d57600080fd5b505190505b6001600160a01b03861660008181526039602090815260409182902084905581519283528201879052818101869052606082018590526080820184905260a08201839052517f84814ca25ab21cf93861766a89cb00d2244dd299e80d790ba1db8f914dd17e499181900360c00190a1505050505050565b600181565b6001600160a01b031660009081526038602052604090205490565b6001600160a01b031660009081526039602052604090205490565b600290565b303b1590565b6001600160a01b0381166000908152603860205260408120548190819080610d71575060009250829150819050610da8565b6000610d8c82610d8088610932565b9063ffffffff610f1c16565b905081610d9f818363ffffffff610daf16565b90955093509150505b9193909250565b600082820183811015610e09576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b603454610e25908263ffffffff610daf16565b6034556001600160a01b038216600090815260386020526040902054610e51908263ffffffff610daf16565b6001600160a01b0390921660009081526038602052604090209190915550565b6000610e0c82633b9aca0063ffffffff610f9d16565b6000610e096b033b2e3c9fd0803ce8000000610ebf610eac868663ffffffff610f9d16565b6b019d971e4fe8401e7400000090610daf565b9063ffffffff610ff616565b600060028204610efb83610ebf610eee876b033b2e3c9fd0803ce8000000610f9d565b849063ffffffff610daf16565b949350505050565b6000631dcd6500610a71633b9aca00610ebf8386610daf565b6000610e0983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611038565b603454610f71908263ffffffff610f1c16565b6034556001600160a01b038216600090815260386020526040902054610e51908263ffffffff610f1c16565b600082610fac57506000610e0c565b82820282848281610fb957fe5b0414610e095760405162461bcd60e51b81526004018080602001828103825260218152602001806111cd6021913960400191505060405180910390fd5b6000610e0983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506110cf565b600081848411156110c75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561108c578181015183820152602001611074565b50505050905090810190601f1680156110b95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000818361111e5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561108c578181015183820152602001611074565b50600083858161112a57fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061117557805160ff19168380011785556111a2565b828001600101855582156111a2579182015b828111156111a2578251825591602001919060010190611187565b506111ae9291506111b2565b5090565b61059791905b808211156111ae57600081556001016111b856fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65645468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6ca2646970667358221220903974c507859096c4233c21fc54733485f3bef18e51a03050fd7c1d03ae567564736f6c63430006080033';

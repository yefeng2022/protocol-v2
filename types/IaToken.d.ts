/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction} from 'ethers';
import {Contract, ContractTransaction, Overrides, CallOverrides} from '@ethersproject/contracts';
import {BytesLike} from '@ethersproject/bytes';
import {Listener, Provider} from '@ethersproject/providers';
import {FunctionFragment, EventFragment, Result} from '@ethersproject/abi';

interface IaTokenInterface extends ethers.utils.Interface {
  functions: {
    'allowInterestRedirectionTo(address)': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(address,address,uint256)': FunctionFragment;
    'getInterestRedirectionAddress(address)': FunctionFragment;
    'getRedirectedBalance(address)': FunctionFragment;
    'getUserIndex(address)': FunctionFragment;
    'isTransferAllowed(address,uint256)': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'principalBalanceOf(address)': FunctionFragment;
    'redirectInterestStream(address)': FunctionFragment;
    'redirectInterestStreamOf(address,address)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOnLiquidation(address,address,uint256)': FunctionFragment;
    'transferUnderlyingTo(address,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'allowInterestRedirectionTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'burn', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getInterestRedirectionAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'getRedirectedBalance', values: [string]): string;
  encodeFunctionData(functionFragment: 'getUserIndex', values: [string]): string;
  encodeFunctionData(functionFragment: 'isTransferAllowed', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'mint', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'principalBalanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'redirectInterestStream', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'redirectInterestStreamOf',
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOnLiquidation',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferUnderlyingTo',
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'allowInterestRedirectionTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getInterestRedirectionAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRedirectedBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isTransferAllowed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'principalBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redirectInterestStream', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redirectInterestStreamOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOnLiquidation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferUnderlyingTo', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export class IaToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IaTokenInterface;

  functions: {
    allowInterestRedirectionTo(_to: string, overrides?: Overrides): Promise<ContractTransaction>;

    'allowInterestRedirectionTo(address)'(
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    burn(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'burn(address,address,uint256)'(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getInterestRedirectionAddress(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'getInterestRedirectionAddress(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getRedirectedBalance(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getRedirectedBalance(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getUserIndex(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getUserIndex(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    isTransferAllowed(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    'isTransferAllowed(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    mint(_user: string, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    'mint(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    principalBalanceOf(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'principalBalanceOf(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    redirectInterestStream(_to: string, overrides?: Overrides): Promise<ContractTransaction>;

    'redirectInterestStream(address)'(
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    redirectInterestStreamOf(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'redirectInterestStreamOf(address,address)'(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'totalSupply()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'transferOnLiquidation(address,address,uint256)'(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferUnderlyingTo(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'transferUnderlyingTo(address,uint256)'(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowInterestRedirectionTo(_to: string, overrides?: Overrides): Promise<ContractTransaction>;

  'allowInterestRedirectionTo(address)'(
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  'allowance(address,address)'(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'approve(address,uint256)'(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    _user: string,
    _underlyingTarget: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'burn(address,address,uint256)'(
    _user: string,
    _underlyingTarget: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getInterestRedirectionAddress(_user: string, overrides?: CallOverrides): Promise<string>;

  'getInterestRedirectionAddress(address)'(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRedirectedBalance(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getRedirectedBalance(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getUserIndex(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getUserIndex(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  isTransferAllowed(
    _user: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  'isTransferAllowed(address,uint256)'(
    _user: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(_user: string, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  'mint(address,uint256)'(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  principalBalanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  'principalBalanceOf(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  redirectInterestStream(_to: string, overrides?: Overrides): Promise<ContractTransaction>;

  'redirectInterestStream(address)'(
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  redirectInterestStreamOf(
    _from: string,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'redirectInterestStreamOf(address,address)'(
    _from: string,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'transfer(address,uint256)'(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'transferFrom(address,address,uint256)'(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOnLiquidation(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'transferOnLiquidation(address,address,uint256)'(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferUnderlyingTo(
    _target: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'transferUnderlyingTo(address,uint256)'(
    _target: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowInterestRedirectionTo(_to: string, overrides?: CallOverrides): Promise<void>;

    'allowInterestRedirectionTo(address)'(_to: string, overrides?: CallOverrides): Promise<void>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'burn(address,address,uint256)'(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getInterestRedirectionAddress(_user: string, overrides?: CallOverrides): Promise<string>;

    'getInterestRedirectionAddress(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRedirectedBalance(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getRedirectedBalance(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUserIndex(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getUserIndex(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    isTransferAllowed(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    'isTransferAllowed(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(_user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'mint(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    principalBalanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'principalBalanceOf(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    redirectInterestStream(_to: string, overrides?: CallOverrides): Promise<void>;

    'redirectInterestStream(address)'(_to: string, overrides?: CallOverrides): Promise<void>;

    redirectInterestStreamOf(_from: string, _to: string, overrides?: CallOverrides): Promise<void>;

    'redirectInterestStreamOf(address,address)'(
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'transferOnLiquidation(address,address,uint256)'(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferUnderlyingTo(
      _target: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'transferUnderlyingTo(address,uint256)'(
      _target: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Approval(owner: string | null, spender: string | null, value: null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowInterestRedirectionTo(_to: string, overrides?: Overrides): Promise<BigNumber>;

    'allowInterestRedirectionTo(address)'(_to: string, overrides?: Overrides): Promise<BigNumber>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'burn(address,address,uint256)'(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getInterestRedirectionAddress(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getInterestRedirectionAddress(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedirectedBalance(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getRedirectedBalance(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUserIndex(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getUserIndex(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    isTransferAllowed(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'isTransferAllowed(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(_user: string, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    'mint(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    principalBalanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    'principalBalanceOf(address)'(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    redirectInterestStream(_to: string, overrides?: Overrides): Promise<BigNumber>;

    'redirectInterestStream(address)'(_to: string, overrides?: Overrides): Promise<BigNumber>;

    redirectInterestStreamOf(_from: string, _to: string, overrides?: Overrides): Promise<BigNumber>;

    'redirectInterestStreamOf(address,address)'(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'transferOnLiquidation(address,address,uint256)'(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferUnderlyingTo(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'transferUnderlyingTo(address,uint256)'(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowInterestRedirectionTo(_to: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    'allowInterestRedirectionTo(address)'(
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'burn(address,address,uint256)'(
      _user: string,
      _underlyingTarget: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getInterestRedirectionAddress(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getInterestRedirectionAddress(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedirectedBalance(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getRedirectedBalance(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserIndex(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getUserIndex(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTransferAllowed(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'isTransferAllowed(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'mint(address,uint256)'(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    principalBalanceOf(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'principalBalanceOf(address)'(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redirectInterestStream(_to: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    'redirectInterestStream(address)'(
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    redirectInterestStreamOf(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'redirectInterestStreamOf(address,address)'(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'transferOnLiquidation(address,address,uint256)'(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferUnderlyingTo(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'transferUnderlyingTo(address,uint256)'(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

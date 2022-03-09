// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PairFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("totalVolumeETH", Value.fromBigInt(BigInt.zero()));
    this.set("pairCount", Value.fromBigInt(BigInt.zero()));
    this.set("txCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PairFactory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PairFactory entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PairFactory", id.toString(), this);
    }
  }

  static load(id: string): PairFactory | null {
    return changetype<PairFactory | null>(store.get("PairFactory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalVolumeETH(): BigInt {
    let value = this.get("totalVolumeETH");
    return value!.toBigInt();
  }

  set totalVolumeETH(value: BigInt) {
    this.set("totalVolumeETH", Value.fromBigInt(value));
  }

  get pairCount(): BigInt {
    let value = this.get("pairCount");
    return value!.toBigInt();
  }

  set pairCount(value: BigInt) {
    this.set("pairCount", Value.fromBigInt(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }
}

export class Exchange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("deployer", Value.fromBytes(Bytes.empty()));
    this.set("creator", Value.fromBytes(Bytes.empty()));
    this.set("poolBalance", Value.fromBigInt(BigInt.zero()));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("reserveRatio", Value.fromBigInt(BigInt.zero()));
    this.set("tokenPrice", Value.fromBigInt(BigInt.zero()));
    this.set("marketCap", Value.fromBigInt(BigInt.zero()));
    this.set("volumeETH", Value.fromBigInt(BigInt.zero()));
    this.set("txCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Exchange entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Exchange entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Exchange", id.toString(), this);
    }
  }

  static load(id: string): Exchange | null {
    return changetype<Exchange | null>(store.get("Exchange", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get deployer(): Bytes {
    let value = this.get("deployer");
    return value!.toBytes();
  }

  set deployer(value: Bytes) {
    this.set("deployer", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get poolBalance(): BigInt {
    let value = this.get("poolBalance");
    return value!.toBigInt();
  }

  set poolBalance(value: BigInt) {
    this.set("poolBalance", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get reserveRatio(): BigInt {
    let value = this.get("reserveRatio");
    return value!.toBigInt();
  }

  set reserveRatio(value: BigInt) {
    this.set("reserveRatio", Value.fromBigInt(value));
  }

  get tokenPrice(): BigInt {
    let value = this.get("tokenPrice");
    return value!.toBigInt();
  }

  set tokenPrice(value: BigInt) {
    this.set("tokenPrice", Value.fromBigInt(value));
  }

  get marketCap(): BigInt {
    let value = this.get("marketCap");
    return value!.toBigInt();
  }

  set marketCap(value: BigInt) {
    this.set("marketCap", Value.fromBigInt(value));
  }

  get volumeETH(): BigInt {
    let value = this.get("volumeETH");
    return value!.toBigInt();
  }

  set volumeETH(value: BigInt) {
    this.set("volumeETH", Value.fromBigInt(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value!.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }

  get buys(): Array<string> {
    let value = this.get("buys");
    return value!.toStringArray();
  }

  set buys(value: Array<string>) {
    this.set("buys", Value.fromStringArray(value));
  }

  get sells(): Array<string> {
    let value = this.get("sells");
    return value!.toStringArray();
  }

  set sells(value: Array<string>) {
    this.set("sells", Value.fromStringArray(value));
  }

  get redemptions(): Array<string> {
    let value = this.get("redemptions");
    return value!.toStringArray();
  }

  set redemptions(value: Array<string>) {
    this.set("redemptions", Value.fromStringArray(value));
  }

  get exchangeHourData(): Array<string> {
    let value = this.get("exchangeHourData");
    return value!.toStringArray();
  }

  set exchangeHourData(value: Array<string>) {
    this.set("exchangeHourData", Value.fromStringArray(value));
  }

  get exchangeDayData(): Array<string> {
    let value = this.get("exchangeDayData");
    return value!.toStringArray();
  }

  set exchangeDayData(value: Array<string>) {
    this.set("exchangeDayData", Value.fromStringArray(value));
  }
}

export class Cryptomedia extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("deployer", Value.fromBytes(Bytes.empty()));
    this.set("creator", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Cryptomedia entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Cryptomedia entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Cryptomedia", id.toString(), this);
    }
  }

  static load(id: string): Cryptomedia | null {
    return changetype<Cryptomedia | null>(store.get("Cryptomedia", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get deployer(): Bytes {
    let value = this.get("deployer");
    return value!.toBytes();
  }

  set deployer(value: Bytes) {
    this.set("deployer", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value!.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromString(""));
    this.set("exchange", Value.fromString(""));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Position entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Position entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Position", id.toString(), this);
    }
  }

  static load(id: string): Position | null {
    return changetype<Position | null>(store.get("Position", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get exchange(): string {
    let value = this.get("exchange");
    return value!.toString();
  }

  set exchange(value: string) {
    this.set("exchange", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Redeem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("exchange", Value.fromString(""));
    this.set("redeemer", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Redeem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Redeem entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Redeem", id.toString(), this);
    }
  }

  static load(id: string): Redeem | null {
    return changetype<Redeem | null>(store.get("Redeem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get exchange(): string {
    let value = this.get("exchange");
    return value!.toString();
  }

  set exchange(value: string) {
    this.set("exchange", Value.fromString(value));
  }

  get redeemer(): Bytes {
    let value = this.get("redeemer");
    return value!.toBytes();
  }

  set redeemer(value: Bytes) {
    this.set("redeemer", Value.fromBytes(value));
  }
}

export class Buy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("exchange", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("buyer", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Buy entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Buy entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Buy", id.toString(), this);
    }
  }

  static load(id: string): Buy | null {
    return changetype<Buy | null>(store.get("Buy", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get exchange(): string {
    let value = this.get("exchange");
    return value!.toString();
  }

  set exchange(value: string) {
    this.set("exchange", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }
}

export class Sell extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("exchange", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("seller", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sell entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Sell entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Sell", id.toString(), this);
    }
  }

  static load(id: string): Sell | null {
    return changetype<Sell | null>(store.get("Sell", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get exchange(): string {
    let value = this.get("exchange");
    return value!.toString();
  }

  set exchange(value: string) {
    this.set("exchange", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }
}

export class VerseDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("dailyVolumeETH", Value.fromBigInt(BigInt.zero()));
    this.set("totalVolumeETH", Value.fromBigInt(BigInt.zero()));
    this.set("txCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VerseDayData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save VerseDayData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("VerseDayData", id.toString(), this);
    }
  }

  static load(id: string): VerseDayData | null {
    return changetype<VerseDayData | null>(store.get("VerseDayData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get dailyVolumeETH(): BigInt {
    let value = this.get("dailyVolumeETH");
    return value!.toBigInt();
  }

  set dailyVolumeETH(value: BigInt) {
    this.set("dailyVolumeETH", Value.fromBigInt(value));
  }

  get totalVolumeETH(): BigInt {
    let value = this.get("totalVolumeETH");
    return value!.toBigInt();
  }

  set totalVolumeETH(value: BigInt) {
    this.set("totalVolumeETH", Value.fromBigInt(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }
}

export class ExchangeHourData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("exchange", Value.fromString(""));
    this.set("tokenPrice", Value.fromBigInt(BigInt.zero()));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("hourlyVolumeToken", Value.fromBigInt(BigInt.zero()));
    this.set("hourlyVolumeETH", Value.fromBigInt(BigInt.zero()));
    this.set("hourlyTxns", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExchangeHourData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExchangeHourData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExchangeHourData", id.toString(), this);
    }
  }

  static load(id: string): ExchangeHourData | null {
    return changetype<ExchangeHourData | null>(
      store.get("ExchangeHourData", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hourStartUnix(): i32 {
    let value = this.get("hourStartUnix");
    return value!.toI32();
  }

  set hourStartUnix(value: i32) {
    this.set("hourStartUnix", Value.fromI32(value));
  }

  get exchange(): string {
    let value = this.get("exchange");
    return value!.toString();
  }

  set exchange(value: string) {
    this.set("exchange", Value.fromString(value));
  }

  get tokenPrice(): BigInt {
    let value = this.get("tokenPrice");
    return value!.toBigInt();
  }

  set tokenPrice(value: BigInt) {
    this.set("tokenPrice", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get hourlyVolumeToken(): BigInt {
    let value = this.get("hourlyVolumeToken");
    return value!.toBigInt();
  }

  set hourlyVolumeToken(value: BigInt) {
    this.set("hourlyVolumeToken", Value.fromBigInt(value));
  }

  get hourlyVolumeETH(): BigInt {
    let value = this.get("hourlyVolumeETH");
    return value!.toBigInt();
  }

  set hourlyVolumeETH(value: BigInt) {
    this.set("hourlyVolumeETH", Value.fromBigInt(value));
  }

  get hourlyTxns(): BigInt {
    let value = this.get("hourlyTxns");
    return value!.toBigInt();
  }

  set hourlyTxns(value: BigInt) {
    this.set("hourlyTxns", Value.fromBigInt(value));
  }
}

export class ExchangeDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("exchange", Value.fromString(""));
    this.set("tokenPrice", Value.fromBigInt(BigInt.zero()));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("dailyVolumeToken", Value.fromBigInt(BigInt.zero()));
    this.set("dailyVolumeETH", Value.fromBigInt(BigInt.zero()));
    this.set("dailyTxns", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExchangeDayData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExchangeDayData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExchangeDayData", id.toString(), this);
    }
  }

  static load(id: string): ExchangeDayData | null {
    return changetype<ExchangeDayData | null>(store.get("ExchangeDayData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get exchange(): string {
    let value = this.get("exchange");
    return value!.toString();
  }

  set exchange(value: string) {
    this.set("exchange", Value.fromString(value));
  }

  get tokenPrice(): BigInt {
    let value = this.get("tokenPrice");
    return value!.toBigInt();
  }

  set tokenPrice(value: BigInt) {
    this.set("tokenPrice", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get dailyVolumeToken(): BigInt {
    let value = this.get("dailyVolumeToken");
    return value!.toBigInt();
  }

  set dailyVolumeToken(value: BigInt) {
    this.set("dailyVolumeToken", Value.fromBigInt(value));
  }

  get dailyVolumeETH(): BigInt {
    let value = this.get("dailyVolumeETH");
    return value!.toBigInt();
  }

  set dailyVolumeETH(value: BigInt) {
    this.set("dailyVolumeETH", Value.fromBigInt(value));
  }

  get dailyTxns(): BigInt {
    let value = this.get("dailyTxns");
    return value!.toBigInt();
  }

  set dailyTxns(value: BigInt) {
    this.set("dailyTxns", Value.fromBigInt(value));
  }
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Exchange extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Exchange", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "Exchange",
      [address.toHex()],
      context
    );
  }
}

export class Cryptomedia extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Cryptomedia", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "Cryptomedia",
      [address.toHex()],
      context
    );
  }
}

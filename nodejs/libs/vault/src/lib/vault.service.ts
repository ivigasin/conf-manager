import { Injectable } from '@nestjs/common';
import * as Vault from 'node-vault';

@Injectable()
export class VaultService {
  private client: Vault.client;
  constructor(
    private vaultOptions: Vault.VaultOptions,
    private options: Vault.Option
  ) {
    this.client = Vault(options);
  }
  public async getValues(path: string): Promise<any> {
    try {
      await this.client.approleLogin(this.vaultOptions);
      return await this.client.read(path);
    } catch (e) {
      console.log(e);
    }
  }
}

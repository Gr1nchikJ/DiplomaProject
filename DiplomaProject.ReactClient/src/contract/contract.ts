import { NearBindgen, near, call, view, UnorderedMap } from "near-sdk-js";

@NearBindgen({})
class Certificate {
  id: string;
  owner: string;
  description: string;
  issuedAt: bigint;
  validUntil: string;

  constructor(id: string, description: string, validUntil: string) {
    this.id = id;
    this.owner = near.predecessorAccountId();
    this.description = description;
    this.issuedAt = near.blockTimestamp();
    this.validUntil = validUntil;
  }
}

@NearBindgen({})
class CertificationSystem {
  certificates: UnorderedMap<Certificate> = new UnorderedMap<Certificate>("certificates");

  issueCertificate(id: string, description: string, validUntil: string): void {
    let certificate = new Certificate(id, description, validUntil);
    this.certificates.set(id, certificate);
    near.log(`Certificate issued for ${certificate.id} by ${certificate.owner}`);
  }

  getCertificate(id: string): Certificate | null {
    return this.certificates.get(id);
  }

  validateCertificate(id: string): string {
    let certificate = this.getCertificate(id);
    if (certificate) {
      if (this.isCertificateValid(certificate)) {
        return `Certificate ${id} is valid and belongs to ${certificate.owner}.`;
      } else {
        return `Certificate ${id} has expired.`;
      }
    } else {
      return `No certificate found for ID ${id}.`;
    }
  }

  private isCertificateValid(certificate: Certificate): boolean {
    const currentTimestamp = near.blockTimestamp(); // Current timestamp in nanoseconds
    const validUntilDate = new Date(certificate.validUntil);
    const validUntilTimestamp = validUntilDate.getTime() * 1e6;
    near.log(`ValidUntil: ${validUntilTimestamp}`) // Convert from milliseconds to nanoseconds
    return currentTimestamp <= validUntilTimestamp;
  }
}

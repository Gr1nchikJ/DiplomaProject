import React from 'react'
import CertificateList from './CertificateList';
import { useAllCertificates } from '../queries';

export const CertificatesLibrary = () => {
  const certificates = useAllCertificates();

  return (
    <CertificateList certificates={certificates.data}></CertificateList>
  )
}

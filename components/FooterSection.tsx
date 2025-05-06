'use client'

import React from 'react'
import footer from "@/app/data/footer";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-[#A5A5A5] py-6">
  {footer.copyright}
</footer>
  )
}

export default Footer;
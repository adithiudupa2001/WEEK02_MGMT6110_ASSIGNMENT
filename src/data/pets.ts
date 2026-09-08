import { Pet, DonationTier } from '../types';

export const PETS_DATA: Pet[] = [
  {
    id: 'kopi',
    name: 'Kopi',
    age: '2 yrs',
    breed: 'Singapore Special',
    type: 'dog',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Rescued near an Ang Mo Kio void deck during heavy monsoon rains. Loves gentle chin scratches and calm walks.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY0u4boQYgrffZ5p3gBq7VUaRObqu3CxIsFlG3FdlJmexkMX8YK_2EQ6aAcWzCRQIIq5PQny_FV1A3yqMVCpSK-X1p66HmRQ6t-RdYRs4W7TAIgXuxGeU1r30zSc4zMBdv5xZiFqG_Vap6L-puO8IGoaXYPJWgw9gVRbQj4v1uTbJa03eahKPxkU3XZSzYcKZSO9WIK_ZAtrp-OeQnVhuZaKZsMfLK2JxUeq0xLgeXXVyRviG3vh-z',
    altText: 'A warm, soulful medium-sized brown Singapore Special dog named Kopi sitting patiently on an earthen patterned rug.',
    gender: 'Male',
    hdbApproved: true
  },
  {
    id: 'milo',
    name: 'Milo',
    age: '7 mos',
    breed: 'Domestic Shorthair',
    type: 'cat',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Found foraging around a Bedok hawker centre. Curious, affectionate purr-machine who adores feather toys.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC1B3HS2z2bhMpW0o8iCA5csLTEFJQxQOwwZ8IS34LIjKJnhZ31nYXjNaMMHDKCY3COXaeAqL-Y9oVxEJ8rzO-Kb3eCbW8bSd0hbxeLwAmYX2CkDucW2O5nX2hgCZZC2xbgHp7aNIDd9DWvCv_ePzq9U5RdlguIW9FvpkJ0E2kjCG4Igqa5BfoOnOUeIl3OI342eimfpDhNUZtCWsqdePNq0oYgBNxnSqzPOy5CCgOmh0g9fI0e-kX',
    altText: 'A playful and curious seven-month-old domestic shorthair kitten with chocolate brown and cream tabby markings named Milo nestled in a seagrass basket.',
    gender: 'Male',
    hdbApproved: true
  },
  {
    id: 'kaya',
    name: 'Kaya',
    age: '3 yrs',
    breed: 'Singapore Special mix',
    type: 'dog',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Saved from a Tuas industrial construction site with a gentle, patient heart. Great with first-time pawrents.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg74kJwDgX5KB3a202puefCWAtzp3wFoolSaxzoITCeTPIpTKHG0cnbSpk-zpVycxDFoTuVcX8z3Gumady9kXzjJbd_LraOR0yiMbb3uhau1Wg0uwAWrsZ3pRnAbwRKa20Sv6j_HMvKCA28C4xUx_vnCmfnOzWJzSzmVGvtuKNBDahekBllsmvQMSlV4rmxpNc3DJqlvLPSQiP3C1QrJG6-ucOB8hGyqHNnTcaMFhssY1fT4-MCVJl',
    altText: 'A gentle, caramel-colored Singapore Special mix dog named Kaya with soft floppy ears resting peacefully on a sun-drenched timber porch.',
    gender: 'Female',
    hdbApproved: true
  },
  {
    id: 'teh',
    name: 'Teh',
    age: '1 yr',
    breed: 'Calico cat',
    type: 'cat',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Discovered sheltering under a Toa Payoh bicycle shed. Quiet observer who turns into an instant cuddle-bug once settled.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7AUGX_RcZx9IU2Dd2kL63O9Djp0yKyierhm9eAXEUu9NzhcDR0-Vv5WTrlIqZlxjJ1yjPHvHhfAwLp6FXO08HL86LtbOaFgICwdGGngqbS1hB2PRhNgVLLfuf6uqLTVYKQRVJsitwdX6WLJtW1YvfAJuPnWqDr8OjPlxnFGRBsSVhxi1KsTasJoix2qbRUpnC6QFnx-4IM48KTu9JTHD6aUFaXGZls8N5O2wA9AigzbiD27kHAd8Y',
    altText: 'A tranquil one-year-old calico cat named Teh with patches of ginger, black, and white fur, curled on a soft linen cushion.',
    gender: 'Female',
    hdbApproved: true
  },
  {
    id: 'biscuit',
    name: 'Biscuit',
    age: '4 yrs',
    breed: 'Golden cross',
    type: 'dog',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Found wandering along Lim Chu Kang farmland. Loyal, house-trained sweetheart who loves sunny afternoon naps.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARq3_F2rLbjDEg3IUC6RZIO2oBQkZoxxUqsMevFp3-nsCe-ZDCH83HJxPdk03GuYP_K73l5OQujjSVnvh2tgLIJlL66_0SWl_OAH46d-oYiuQbuUdfNYLGaGqkcrAZaDvtoYFIly4bXElXsZtrZ8EHI_ezG0W4zUZSMtGelfGKkDe9iFg9zmQQhp2k7Q_sQkNpONtk5N3SQARBiPOdfCHFZZ0c6DCorDiF2TY9KJVsLWd3vQoZSax2',
    altText: 'A friendly, golden-coated crossbreed dog named Biscuit lying happily on a sun-dappled grass sanctuary courtyard in Lim Chu Kang.',
    gender: 'Male',
    hdbApproved: true
  },
  {
    id: 'pandan',
    name: 'Pandan',
    age: '5 mos',
    breed: 'Tabby kitten',
    type: 'cat',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Rescued beside a Pasir Ris park canal with siblings. Playful, energetic explorer looking for a warm lap.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWYsuVabRWNdUmhbfu2SDKQXdR8CpqNEFNPOXG45TB2uduCgtnCZcq4vIn6puO8hnXbL0cXLPiKECJvdQ7kKLABO2y7dzbE7jO-TkiU7oUBGYh1ICzG2ANRNpSNyutCC1pCMtTM4-jiJcpDMXp0yyhF3ZoFBLaAsXbuEchFWUUtkyL4M_rNv7u7AzDh0qcReMz7vCy7eZiAYqyIO0graoVKEE89cTOwF6GO42UZkWPckZszpTZpbCO',
    altText: 'An inquisitive five-month-old tabby kitten named Pandan perched upright on an organic cotton scratch post.',
    gender: 'Male',
    hdbApproved: true
  },
  {
    id: 'luna',
    name: 'Luna',
    age: '1.5 yrs',
    breed: 'Black Singapore Special',
    type: 'dog',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Nurtured after being rescued along Jurong West. Deeply intelligent, walks like a dream on leash.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCpG209N6vEnxKjoLqaGFBphxmPZRgHjgLccSesXt4pxEaGYBh4YbB8mC807PyOE5SEPYGbVm32A8MwDrpOUDM5DGOjyYXcls5cUmG9tNjW3UqNg3-wNWDsreejyoxT3qjqV8z8vLewOnafsAGk3EtIyhIjeXE1nibTKKF8Ao0PZ6mPZjIzXMOkL3dGYYmjqJaJF09fnYhydtbolSotopMDjS895RSlJLjhoA7OoOdmclmDm-ZGXtJ',
    altText: 'An elegant, sleek black Singapore Special dog named Luna sitting alertly on a clean light-timber floor.',
    gender: 'Female',
    hdbApproved: true
  },
  {
    id: 'tofu',
    name: 'Tofu',
    age: '2 yrs',
    breed: 'White Domestic Shorthair',
    type: 'cat',
    tags: ['Vaccinated', 'Dewormed'],
    description: 'Safely brought in from a Woodlands multi-storey car park. Shy at first, then becomes your devoted shadow.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_mRYwANhCrzXpoqMROMInhsSDEXDWSXAVo_LfIZ4HdmsNP1OLtK-Ki1N48fTcFxsVKgH9NF7z6pZpcWtmdv44z5HEy4jrhXgBtlvAcQhU3HQdgp8Zb6sFYENqjcUEYsRrwn1rxcDVXrFwsRnaF8fBDykGW20-CMupH912Hsz_r_lGtN5J_L-EfCnhtZrd5xiVLuzs_WlkFbrbUDS-8kbZff8PemNVT4Aj6K_9b6KgGHGdd5Vw_62v',
    altText: 'A pristine white domestic shorthair cat named Tofu with delicate pink ears and serene pale eyes resting quietly on a cream wool mat.',
    gender: 'Male',
    hdbApproved: true
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    amount: 25,
    title: 'Shelter Food Pack',
    subtitle: 'Feeds a rescue for 1 week',
    impactDescription: 'Provides nutritious food and fresh clean drinking water for one shelter puppy or kitten for an entire week.'
  },
  {
    amount: 50,
    title: 'Healthcare & Vaccines',
    subtitle: 'Core vaccines & preventatives',
    impactDescription: 'Covers essential routine deworming, flea preventatives, and full core vaccinations for two street rescues.'
  },
  {
    amount: 100,
    title: 'TNVR Medical Fund',
    subtitle: 'Sterilisation & emergency care',
    impactDescription: 'Subsidises veterinary surgical sterilisation (TNVR) and emergency post-operative wound care for one rescued stray.'
  }
];

export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC75nx9i7VRBpzPB9hBo3KctSOQiZmKQuS3Eg0qQXy59AyqsOrhd5Yk5BP_D8RVegmy1M1CTiGnxNgD9DGm8q4dSXQerQO4r4PCAnqpYkp4g2zmPrCd_lo9tKV36kHz2kk-Uyo6vIFzi-hrl4DGRm80IIRKk2w3Xs3tJNR9UieWSVXazRQykr7GkM5Rp5DpTbdAyxoLG7FYnBjRoBJx7NRHenrUSzdnwEW9AXyBOyOqtB2Fpo9hKGyQ';

export const AFTER_ADOPTION_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn4F5JPEhCaXjx5zODmPZ-l3Mip5dgZEkvAnghIOLRLbR0BNd8uBRyqNDwpXGxfZS13nV7fFM_waYxY0DS-aPAPC5g3fMpogQwDjxz7rgCP62HIBuTB8VJGj-ck_1sHZxMdYlBz2j_epPrBWCSoKi3T9_v6-ceh8Tr-zZ283crAQueAmytU8WY8GtOYbn40de2ysjGXC4oS4z6ymY64sTL8D7yZw2F5DC2zR5FseQ5Tg0KIJhZ6qxM';

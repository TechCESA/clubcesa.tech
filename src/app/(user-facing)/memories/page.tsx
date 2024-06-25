import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='mt-12 min-h-screen select-none p-4 lg:p-8'>
      <div className='grid-row-2 grid h-full w-full gap-4 lg:grid-cols-2'>
        <div className='flex h-[50vh] items-center justify-center rounded-2xl border-2 border-slate-100 p-8 text-left md:h-[90vh]'>
          <h1 className='text-6xl font-semibold md:text-8xl'>
            Chamber
            <br />
            of <span className='text-pink-500'>Memories</span>
          </h1>
        </div>
        <div className='grid h-[90vh] grid-rows-2 gap-4'>
          <Link
            href={
              'https://www.playbook.com/s/farewell-24/gqMxLPLxd8z3XMgWhkdCV31b'
            }
            className='relative h-full overflow-hidden rounded-2xl border-2 border-slate-100'
          >
            <Image
              className='blur-[1px]'
              src={
                'https://img.playbook.com/6ObnewikNYqznXCJovgPpJSpXlXzNx_J4LiNNClGWMA/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNGFh/MzlkYi0zZTZjLTQy/ZmItOTZlNi04OGUx/OGUxMWM4MjU.webp'
              }
              alt='Farewell 2024'
              fill={true}
              loading='lazy'
              style={{ objectFit: 'cover' }}
            />
            <p className='absolute bottom-4 left-6 z-10 text-4xl font-bold text-white'>
              Farewell 2024
            </p>
          </Link>
          <div className='grid grid-cols-2 grid-rows-5 gap-4'>
            <Link
              href={
                'https://drive.google.com/drive/folders/1nKpUJfib8CBNUQzvBIezYNpheMKgSUPk'
              }
              className='relative col-span-2 row-span-3 h-full overflow-hidden rounded-2xl border-2 border-slate-100 lg:col-span-1 lg:row-span-2'
            >
              <Image
                className='blur-[1px]'
                src={
                  'https://lh3.googleusercontent.com/fife/ALs6j_Ffnh0WI53QD_SavwUMKBrbRVdmDGfIBrlog3qoWKLIGHA8Ea9L4o7tcADWYGAsJPgrT3hdnJHAVNA7La9_adZqfX-GYrKvQcu-YpkhCoJ_OffUwsRef-u04rL-U8hWNkhACaSyLXTPNi67MwMZ_Unv2GXtMvz5uQqDLqSokg-UKxoqTH2qNZILs1OzplaQYp4A5ymwSH-27AZ-1aR1sn4Ae6WIOYWPa1iz3x5gdPCY2LCVuPZoP-25gpzlNR5txGEbQZBr2kYwFNleXsELdCtTiaUQFxvKy5dE7x4_6TYWdI17KEUXRhm7ZpCnF_HpG0MNNPDJRmd2t8v9b7cG54l9aJE06iEj8J21xZogDR9008OB29dDzbXrVdEIueCd-Y1iY1203wU2i4zue9nW8GR36eD4JwAk-4ckB6odm2VJUVkiLM5OrGgXU12Swm6Of2GbBsbzCdbqHL-C0Kg0h8Nkltk7j-MR8ZPOKpMwKopWk316xsz5iuCKg2JrnHWVqF2G6N5mioIHGO6W32na8UEYuhIJsO52D-AECwtodz3O1JDIJ1jn1sHygx4qf8cjIocQLgbQZwFK-w5gbzx-BEi1zCOu2ZiG7jt96uxmyg96o2B5HIsxS1-nu4gYzvDk3IUGXty9wAxFMGbmNkWe2GHHVDBgCncghCutA6hK9QjMiqa5cQOZ1ECboXiTtxRRWdmRfKQvpZ68GlV4CX1GPynrV6XZKr1CumEfjfGCpxODRV_PBsoPL_NnXkkvQrMdmS9wSPCLWKovylGFzZrGONnu2anzCEmHWrvY9uP68K6kop0tsXUtCpt8KWGXrTthTzpGpOS4mJpNyjZQj_lyJlLwKe_Q8S8L8AU8kbHubFgWZwZkjv_jwGgZ8nq3Dgtgy_phVUR07MUSJWJDZ2doEOAZHjXsqc0O2nu71XG8WK8dMupK7b7_S6h1ZhVSlYgP78P5SAYBPwsb8-TE-gZkvuvwlW69Evj1EANgd0J4VtBYQIeNEc9XAiXvVDM_0qFBjWCe4t90dCMMSmvzi71hz-K6J16MqQK90rQl9diPVBg1OAerPacM84oVbcpg_nnJ_VdB9aneLj1SHNd8TWTYUsxnTOt-RCydm1rAufwraSf1_TiSLU47mEHWUJbVPjNq7hlouCcdAZB5f-_xnY1Ngpk01WvxXkvd7NkFuD3z8bPEmd1mYKxxhr60J8ikMx3p_sCWccuCnM8F3SOfAXAKtDpFqd1_kTsB_o0Im3Hw7c-NpkIH4Rl1eMsj-JZtBo439gR7hJU_Fzlh0FlifHep_CCiaeOlUA5kc25siDQnGsfNYO7gt5tDz0WdzlCfvFd5OTOU9rMEX51UGgXPdZdZes9vNOUr48ZQSL81g5vz3NVXmZIlpukNT-V0x_HG3uU-C9afx-ZtOkgsCeccx_Or2S8Zs_l8UiR1Ok6Y6qdrTcxjcDjoNSkxOM6owjOVHTVp6rH5g59SDq2-Rmv2zcEqwutRtrO6sD5MjIc2hWoDrtfbFRnbkafaOX1xjWle9tUh5nScjC3ZgNwAwGDvNoNeMYVIpo4U7X2imEnlxvCgPUYFtjKaCHS-SOTzFaMRQ3b9wSsm84NGR93r4kq3DQyxBMge76prAYDm4YQTHGmrvlFMPfrCo_hJOpv_BheFyBANo7UPjiB6xA78rU9dfU9MdL6hyJlDZDYWr5cxy1SzIS0gOvjqr3T-JDgfOPjnGBgsdYdc3YYaOlCjq9kIk760dFRN79ME2A=w2880-h1574'
                }
                alt='Cyber Carnival'
                fill={true}
                loading='lazy'
                style={{ objectFit: 'cover' }}
              />
              <p className='absolute bottom-4 left-4 z-10 text-2xl text-white'>
                Cyber Carnival
              </p>
            </Link>
            <Link
              href={
                'https://drive.google.com/drive/folders/1-IMzu40f0LWnZUB9O7GcWrhTS03BYzWb'
              }
              className='relative row-span-3 overflow-hidden rounded-2xl border-2 border-slate-100'
            >
              <Image
                className='blur-[1px]'
                src={
                  'https://lh3.googleusercontent.com/fife/ALs6j_HN0h-r58rNwFPvCJswqKwGmj92rYuJ8pNfc_VkG1P-bIuZps5ER03ZcoJVq0H62lGNCGjIT5o1-7nVtbzTY5wBkgw_QT_3DwyHCYSAs0L0zwCaWuXcTUen0Fbts1mGhmYGPRLBWgby32uZHeGMMydCZZ7uTqTDMoQ1fyyH_fYkBQTKD-lQCcQcHokmGT5Wyxviimr_u2e_GliW6X71blyJeqpvFGMJTHKd83cY0FJi8gKi3__VPkHfBzkel__UqUTdoEWLy1bBG2qvEA9C2ebyzrhYApee3DB_7bsLvuLzJYLu8n_wo_hrRAJ_DjphbC63CLYzSeHTBQqUfed_OSSBsrRSHvYCJQ0PLLCWCgo3kS2RT-co1HJNQeGqhbj3jimDfCbnimwE8cYIe34H4cfdHPgd_s4LHijAfXmLdPR-0MKI1W1UIfByziORwgMmB5P_eYNn9Nj8DDxFXRVQlMPPOsx4r3OFIiBNwu4QjGfLetmJXh87HhhDdX8-tLFHl3tSXFUN8SCBjAInnN6qgHabIUsywGKWtN2CcLEASdh8HvbKtBDBF-BMITK9ZR8Hcuj3AZjYdaMRFM1lVcSgWS6MNc-pH1Ju2yXzSUs8Uiq_Fn0aZOh_RaZzr1FhPmiCwG7GXuoDfv6MOYdlg_7STWFe7KKMbQiqT2X3kTjE6DQmNnQivLrFdHG4ddNpJi2pVvMejOLxIkZHeJc8n1cHsX7VxYvsbGwpghgGt2iHgPad_aHcLU6Cb41OXaq-G3gPng7IwUcIIrBvo0QWvKufwB3QH792HIeFXTpQegU3QVsC_Xb7-AUL-KYMm64BU6ei9PJwz-Jq5XzTaISB9HTMNov5_hX_ya43vsv8vtB0q6KL4Wl_lXvPr6igC6jP4TKyu6C02RUFrQqJGN3nWArjPu-WigR_hJgWDFE3BJcqtdSzZNQbCUjFa1b7grl-8x0aIy0zsPiX4JgB9RONmfIARrRPvCycIR9DqbZY9cl9jsX4_mDPqF7rlm9raoPKhePEnzzkoo3r7Jt_p2ASoEi3to5-oJNgeKvX6yR10rZc2GTgGF8I7X5yh7K7ae8YB6vTGJ3zMqaOBkqZyiRnI2CsfnoBeIlHOw_92ZQj4R1u6LoTcEpicbLBs3vbb-VI2iOS2Twb5Toa-p7B_QjCl--d2PA1hc9ZNkiGYG6V2o7mZEatUsJAkaMiVS9VBhSCj2de42p2DWVsbv5C-UuOz3Z-vFIzqn1rP4eCO9Vlr-yJdPzxZ1xqWLLunq17-GQ2H9AjpsyOTkEgJ8-DRAraxajQCRcV30aVXHqM2QijOi1fAuEXJom-YTgvQD6BQ5-F70eBWZ_LIisr5e2CHI4k6D-fwlSj2N_CklSRs5olYoaLVWHLmDNxS12nC-Gjj2jkzyHqZ0YigYKLCEu-7_o19VBJmeCAXnZneM-Gw1GwIIAb7D1wiF7Wl-lygl5Y9m4ekm88m0Uie6gck3aNXx7ZJuH2brjGmaYJwnFDtEMWcY1pVBVHOEYaPqHlzOy5InD6iLLQJ_AQ0FlTUfhjEzMxyqHMmDsAj07d8om-czC3aozuiNs5wX_Cjwc-Ktq_jIcEBZI4eAMLCjPE-dEVZzkJtB3Hlm_cs1tGow8mdj2gOLCbbABztjtrUpx5wOL6CL2LIPmDPLNH_lbMJkJx1gf74ntKYzNz1lxRlZVhJf6_N-RyiEjNhIsYDdo1ekvSEaNjI43GIaiSt5v5FVx88wxPLnwzRxqg7GxzoA=w2880-h1574'
                }
                alt='Sports 2023'
                fill={true}
                loading='lazy'
                style={{ objectFit: 'cover' }}
              />
              <p className='absolute bottom-4 left-4 z-10 text-2xl text-white'>
                Sports 2023
              </p>
            </Link>
            <Link
              href={
                'https://drive.google.com/drive/folders/1_7iVvblgVCVIQ6Kq2Y6RYCnjOxhJJ9qO'
              }
              className='relative row-span-3 overflow-hidden rounded-2xl border-2 border-slate-100'
            >
              <Image
                className='blur-[1px]'
                src={
                  'https://lh3.googleusercontent.com/fife/ALs6j_GnxAIkSsTec9FHgQMwWxrUR9pt0wQgxq7RTiJDDjur-cwe79LPNkdEMrZzIHRJHtuqpQaHxhnSlnoTF99n4jPHtu-KpBVwb35x7VAdrPU3XmAuRCwWED6bu7D3wHM66Uk-Hjjeu-3AYZ_9-jJ0OZzCuobM7Q9EygxdjElDnzLoOcP3sOpF1cbEFPYX6Ed-gsekrsEZ7duPRrIfuAyuqyFo76yJvDU4ra3LCy69Swcw6uimXxJo8bh-Rpl8cGCRLHqnEMvi8IrU1OrHP0imTz5vUwYap1i6gFUaKcCZ9K2rVuLHu6eGqNpipbHrwkMu7kHJqGQaN43MlNzv6hOmR5FavpGVCd2kOdrrzKfvbFXpgYJsvFgI3TVyinOby6rLHwDJ1zMsc_v5eWrawNLqVtTEtC-PMKVD5QJmlQHc_JPtD7BeCic3T0vrtBN5kJox6cVQlw_qAhhXfwBNtmkcjJ23aaKJeYqjnq0agtkAbTiIOX087C0RijoQOhEWyVCYmk0q37ym7lGExTkOeMr1bEYaYl0iLy0jk4OtFXNstwl6cbKFFc5JvUc-mkAe9u4dLJKts39DB9GqI6fzM8ordRIB18QEOKvzNogVklPAd73t591BQNhzIl_FT-TQVRuUv5c5r6JAAmsma7LG5K1Lec2a0W6g_ziGfNrh9-EpZ-1nymhMqCyu7X1wkATXUK92AujYpE0FulydZh-_x4lI-ktiJJ3urqzBrcr5a7WQtmYtTahekRAvjtAl0m6kOVvCigR9aCRAvp2ZyE91Auo9OpLYZv00S-TcWT8Nu_hnVbGMayPuv4Kid5SrfduFztB6F0hLObA0IicqhLcWA6k0rckQa3uELhSfrtY4ORXuJtxXazJvhItWKKC4QD3VWxydbd0kC5JNmUMFmDyc1-6FTB0hg-oNYBnZ3Pee28IL1L9kT3rlgWBl6le6kgSGkhNkpRgNl5zoGz7L5Wap6thiVfjXL-D91ykOng19F1ehMS5vwP4K_OLfhf8T5HzdO9XWP3-I6AxfuJExS6YvyY0hcExSQUoPHonISQTyJ1mopb1i__v-94Mtaq9I6u458--aNtewiSfM5kQurnqkyuCsPx6cQdAo9NlDEg3H-N9YWFJMwq7-hwxFiT-g7eCdRwIfYCIT0CZ2N6TnIFEJGbdt12ktxj5vYZJCUuG3K_l-wqAsrCU7P5rHqGhHcdnRsDF6jTvhM1brQqB3diuvx86fHAguHlV_OOfhAFtLxpqEvjGq2aNWt1vgxYIBTU1KmtRKXaKGAVJEMcrvQ1tOr4uBXBz-reLSzgfNl_UmOPpF4UaxGU06jGQiNRvKGiq7D_gw68ijFFtXxg5Y98c2xdfOdikiPDK2wWhfO4NkP0mIBkvWEfEWbEZ-O-y9In0MylptZj76IBSdBxXr28MDsPu-FN5iZCL6HWijw73WRo0NSy1bDrg2nQ44Jb4ASG-pOoxP4APbmFEJ-nw55mmNFUZV6jaZ5LIQyoy7Krd1kAW4_qgdk3KG0ejIseq30FKnKkSoWMgID7jSCS2byxDqrfz8LOTzMlQ0ceqJglklCz-C-4TsrEBBv1GjXhhDWpHOgSF1uyNmrcLNuL2v06or61Gsay2IH8KzFT491jHc4AujmHYCY9xTQtz_btfTi1QWgS98HrifgQZ5MaBKdmb7xDUs1WcqQrBaPD2z6fy-sUN5UI5tvxNf2ArZSlfLI3b2AonugVZht7JyMeq839b03hXBF5MK3p5BDw=w2880-h1574'
                }
                alt='Alumni Meet 2023'
                fill={true}
                loading='lazy'
                style={{ objectFit: 'cover' }}
              />
              <p className='absolute bottom-4 left-4 z-10 text-2xl text-white'>
                Alumni Meet 2023
              </p>
            </Link>
            <div className='row-span-2 hidden items-center justify-center overflow-hidden rounded-2xl border-2 border-slate-100 bg-yellow-300 text-2xl font-bold uppercase lg:flex'>
              Discover the past
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

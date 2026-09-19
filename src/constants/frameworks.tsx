import React from 'react';
import type { PackageManagerOption, FrameworkOption } from '../types.js';

export function ReactIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M0 0h128v128H0z" fill="none" />
      <g fill="#61dafb">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" />
      </g>
    </svg>
  );
}

export function VueIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="#41b883" d="M1.791 3.851L12 21.471L22.209 3.936V3.85H18.24l-6.18 10.616L5.906 3.851z" />
      <path fill="#35495e" d="m5.907 3.851l6.152 10.617L18.24 3.851h-3.723L12.084 8.03L9.66 3.85z" />
    </svg>
  );
}

export function SvelteIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M0 0h128v128H0z" fill="none" />
      <path fill="#ff3e00" d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.2 34.2 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.4 34.4 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.5 36.5 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.13 34.13 0 0 0 15.438-22.918a35.5 35.5 0 0 0 .572-6.386a36.2 36.2 0 0 0-4.112-16.71a34.4 34.4 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.4 36.4 0 0 0-6.787-21.178z" />
      <path fill="#fff" d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.64 23.64 0 0 1-19.435-10.187a21.9 21.9 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.7 38.7 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.63 6.63 0 0 0 1.228 3.854a7.1 7.1 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.26 6.26 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.14 7.14 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.64 23.64 0 0 1-25.39-9.416a21.94 21.94 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.65 20.65 0 0 1 9.286-13.781l29.792-18.99a21.9 21.9 0 0 1 6.048-2.667a24 24 0 0 1 5.954-.75A23.68 23.68 0 0 1 98.22 24.745a21.94 21.94 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.4 38.4 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.1 7.1 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.1 7.1 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.66 23.66 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.6 20.6 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z" />
    </svg>
  );
}

export function SolidIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M0 0h128v128H0z" fill="none" />
      <defs>
        <linearGradient id="SVGUlDDmcSi" x1="27.5" x2="152" y1="3" y2="63.5" gradientTransform="translate(-3.22 1.507)scale(.80503)" gradientUnits="userSpaceOnUse">
          <stop offset=".1" stopColor="#76b3e1" />
          <stop offset=".3" stopColor="#dcf2fd" />
          <stop offset="1" stopColor="#76b3e1" />
        </linearGradient>
        <linearGradient id="SVGN6xYIcgs" x1="95.8" x2="74" y1="32.6" y2="105.2" gradientTransform="translate(-3.22 1.507)scale(.80503)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#76b3e1" />
          <stop offset=".5" stopColor="#4377bb" />
          <stop offset="1" stopColor="#1f3b77" />
        </linearGradient>
        <linearGradient id="SVG50enQebW" x1="18.4" x2="144.3" y1="64.2" y2="149.8" gradientTransform="translate(-3.22 1.507)scale(.80503)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#315aa9" />
          <stop offset=".5" stopColor="#518ac8" />
          <stop offset="1" stopColor="#315aa9" />
        </linearGradient>
        <linearGradient id="SVGhNTqjeci" x1="75.2" x2="24.4" y1="74.5" y2="260.8" gradientTransform="translate(-3.22 1.507)scale(.80503)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4377bb" />
          <stop offset=".5" stopColor="#1a336b" />
          <stop offset="1" stopColor="#1a336b" />
        </linearGradient>
      </defs>
      <path fill="#76b3e1" d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415l-12.076 20.931l20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z" />
      <path fill="url(#SVGUlDDmcSi)" d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415l-12.076 20.931l20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z" opacity=".3" />
      <path fill="#518ac8" d="m38.642 29.683l-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683" />
      <path fill="url(#SVGN6xYIcgs)" d="m38.642 29.683l-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683" opacity=".3" />
      <path fill="url(#SVG50enQebW)" d="M104.654 65.91a36.23 36.23 0 0 0-38.641-12.076L16.1 69.934L0 98.111l90.164 15.295l16.1-28.981c3.22-5.635 2.415-12.075-1.61-18.516z" />
      <path fill="url(#SVGhNTqjeci)" d="M88.553 94.085A36.23 36.23 0 0 0 49.912 82.01L0 98.11s42.667 32.202 75.673 24.152l2.415-.806c13.686-4.025 18.516-16.905 10.465-27.37z" />
    </svg>
  );
}

export function NpmIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M0 0h128v128H0z" fill="none" />
      <path fill="#cb3837" d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z" />
      <path fill="#fff" d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z" />
    </svg>
  );
}

export function PnpmIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M0 0h128v128H0z" fill="none" />
      <path fill="#f8ab00" d="M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z" />
      <path fill="#4c4c4c" d="M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z" />
    </svg>
  );
}

export function BunIcon({ size = 16, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
    >
      <path d="M0 0h128v128H0z" fill="none" />
      <path fill="currentColor" d="M113.744 41.999a19 19 0 0 0-.8-.772c-.272-.246-.528-.524-.8-.771s-.528-.525-.8-.771c-.272-.247-.528-.525-.8-.772s-.528-.524-.8-.771s-.528-.525-.8-.772s-.528-.524-.8-.771c7.936 7.52 12.483 17.752 12.656 28.481c0 25.565-26.912 46.363-60 46.363c-18.528 0-35.104-6.526-46.128-16.756l.8.772l.8.771l.8.772l.8.771l.8.772l.8.771l.8.771c11.008 10.662 27.952 17.527 46.928 17.527c33.088 0 60-20.797 60-46.285c0-10.893-4.864-21.215-13.456-29.33" />
      <path fill="#fbf0df" d="M116.8 65.08c0 23.467-25.072 42.49-56 42.49s-56-19.023-56-42.49c0-14.55 9.6-27.401 24.352-35.023S53.088 14.628 60.8 14.628S75.104 21 92.448 30.058C107.2 37.677 116.8 50.53 116.8 65.08" />
      <path fill="#f6dece" d="M116.8 65.08a32.3 32.3 0 0 0-1.28-8.918c-4.368 51.377-69.36 53.846-94.912 38.48c11.486 8.584 25.66 13.144 40.192 12.928c30.88 0 56-19.054 56-42.49" />
      <path fill="#fffefc" d="M39.248 27.234c7.152-4.135 16.656-11.896 26-11.911a15.4 15.4 0 0 0-4.448-.695c-3.872 0-8 1.93-13.2 4.83c-1.808 1.018-3.68 2.144-5.664 3.317c-3.728 2.222-8 4.736-12.8 7.251C13.904 37.972 4.8 51.071 4.8 65.08v1.836c9.696-33.033 27.312-35.547 34.448-39.682" />
      <path fill="#ccbea7" d="M56.192 18.532A24.55 24.55 0 0 1 53.867 29.1a25.4 25.4 0 0 1-6.683 8.671c-.448.386-.096 1.127.48.91c5.392-2.02 12.672-8.068 9.6-20.272c-.128-.695-1.072-.51-1.072.123m3.632 0a24.5 24.5 0 0 1 3.646 10.12c.445 3.587.08 7.224-1.07 10.662c-.192.54.496 1.003.88.556c3.504-4.32 6.56-12.899-2.592-22.156c-.464-.4-1.184.216-.864.756zm4.416-.262a25.7 25.7 0 0 1 7.521 7.925A24.7 24.7 0 0 1 75.2 36.414c-.016.13.02.26.101.365a.543.543 0 0 0 .718.117a.5.5 0 0 0 .221-.313c1.472-5.384.64-14.564-11.472-19.332c-.64-.246-1.056.587-.528.957zM34.704 34.315a27.4 27.4 0 0 0 9.91-5.222a26.3 26.3 0 0 0 6.842-8.663c.288-.556 1.2-.34 1.056.277c-2.768 12.343-12.032 14.92-17.792 14.58c-.608.016-.592-.802-.016-.972" />
      <path fill="currentColor" d="M60.8 111.443c-33.088 0-60-20.798-60-46.363c0-15.429 9.888-29.823 26.448-38.448c4.8-2.469 8.912-4.953 12.576-7.128c2.016-1.203 3.92-2.33 5.76-3.379C51.2 12.916 56 10.771 60.8 10.771s8.992 1.852 14.24 4.845c1.6.88 3.2 1.836 4.912 2.885c3.984 2.376 8.48 5.06 14.4 8.131c16.56 8.625 26.448 23.004 26.448 38.448c0 25.565-26.912 46.363-60 46.363m0-96.814c-3.872 0-8 1.928-13.2 4.829c-1.808 1.018-3.68 2.144-5.664 3.317c-3.728 2.222-8 4.736-12.8 7.251C13.904 37.972 4.8 51.071 4.8 65.08c0 23.436 25.12 42.506 56 42.506s56-19.07 56-42.506c0-14.01-9.104-27.108-24.352-35.023c-6.048-3.086-10.768-5.986-14.592-8.27c-1.744-1.033-3.344-1.99-4.8-2.838c-4.848-2.778-8.384-4.32-12.256-4.32" />
      <path fill="#b71422" d="M72.08 76.343c-.719 2.839-2.355 5.383-4.672 7.267a11.07 11.07 0 0 1-6.4 2.9a11.13 11.13 0 0 1-6.608-2.9c-2.293-1.892-3.906-4.436-4.608-7.267a1.1 1.1 0 0 1 .05-.5a1.1 1.1 0 0 1 .272-.428a1.19 1.19 0 0 1 .958-.322h19.744a1.19 1.19 0 0 1 .947.33a1.07 1.07 0 0 1 .317.92" />
      <path fill="#ff6164" d="M54.4 83.733a11.24 11.24 0 0 0 6.592 2.932a11.24 11.24 0 0 0 6.576-2.932a17 17 0 0 0 1.6-1.65a10.9 10.9 0 0 0-3.538-2.564a11.3 11.3 0 0 0-4.302-1a10.1 10.1 0 0 0-4.549 1.192a9.7 9.7 0 0 0-3.451 3.097c.368.323.688.632 1.072.925" />
      <path fill="currentColor" d="M54.656 82.514a8.5 8.5 0 0 1 2.97-2.347a8.8 8.8 0 0 1 3.734-.862a9.78 9.78 0 0 1 6.4 2.608c.368-.386.72-.787 1.056-1.188c-2.035-1.87-4.726-2.933-7.536-2.978a10.5 10.5 0 0 0-4.335.975a10.1 10.1 0 0 0-3.489 2.666q.568.595 1.2 1.126" />
      <path fill="currentColor" d="M60.944 87.436a12.08 12.08 0 0 1-7.12-3.086c-2.477-2.02-4.22-4.75-4.976-7.791c-.054-.27-.045-.55.027-.817a1.8 1.8 0 0 1 .389-.726a2.25 2.25 0 0 1 .81-.595a2.3 2.3 0 0 1 .998-.192h19.744c.343-.007.683.06.996.196a2.3 2.3 0 0 1 .812.591c.182.212.313.46.382.728c.07.267.076.545.018.815c-.756 3.042-2.5 5.771-4.976 7.791a12.08 12.08 0 0 1-7.104 3.086m-9.872-11.417c-.256 0-.32.108-.336.139c.676 2.638 2.206 4.999 4.368 6.742a10.12 10.12 0 0 0 5.84 2.7a10.2 10.2 0 0 0 5.84-2.67c2.155-1.745 3.679-4.106 4.352-6.741a.33.33 0 0 0-.14-.113a.35.35 0 0 0-.18-.026z" />
      <path fill="#febbd0" d="M85.152 77.3c5.17 0 9.36-2.377 9.36-5.308s-4.19-5.307-9.36-5.307s-9.36 2.376-9.36 5.307s4.19 5.307 9.36 5.307zm-48.432 0c5.17 0 9.36-2.377 9.36-5.308s-4.19-5.307-9.36-5.307s-9.36 2.376-9.36 5.307s4.19 5.307 9.36 5.307z" />
      <path fill="currentColor" d="M41.12 69.863a9.05 9.05 0 0 0 4.902-1.425a8.6 8.6 0 0 0 3.254-3.812a8.2 8.2 0 0 0 .508-4.913a8.4 8.4 0 0 0-2.408-4.357a8.9 8.9 0 0 0-4.514-2.33a9.1 9.1 0 0 0-5.096.48a8.76 8.76 0 0 0-3.96 3.131a8.3 8.3 0 0 0-1.486 4.725c0 2.252.927 4.412 2.577 6.005c1.65 1.594 3.888 2.492 6.223 2.496m39.632 0a9.05 9.05 0 0 0 4.915-1.403a8.6 8.6 0 0 0 3.275-3.802a8.2 8.2 0 0 0 .528-4.917a8.4 8.4 0 0 0-2.398-4.368a8.9 8.9 0 0 0-4.512-2.344a9.1 9.1 0 0 0-5.103.473a8.76 8.76 0 0 0-3.967 3.13a8.3 8.3 0 0 0-1.49 4.73c-.004 2.245.914 4.4 2.555 5.994c1.64 1.593 3.869 2.495 6.197 2.507" />
      <path fill="#fff" d="M38.4 61.902a3.4 3.4 0 0 0 1.844-.531c.547-.35.974-.847 1.227-1.43a3.1 3.1 0 0 0 .195-1.847a3.16 3.16 0 0 0-.902-1.639a3.35 3.35 0 0 0-1.696-.878a3.43 3.43 0 0 0-1.916.179a3.3 3.3 0 0 0-1.489 1.176a3.1 3.1 0 0 0-.559 1.776c0 .844.347 1.654.964 2.253a3.37 3.37 0 0 0 2.332.94zm39.632 0a3.4 3.4 0 0 0 1.844-.531c.547-.35.974-.847 1.227-1.43a3.1 3.1 0 0 0 .195-1.847a3.16 3.16 0 0 0-.902-1.639a3.35 3.35 0 0 0-1.696-.878a3.43 3.43 0 0 0-1.916.179a3.3 3.3 0 0 0-1.489 1.176a3.1 3.1 0 0 0-.559 1.776c0 .84.342 1.644.953 2.242c.61.598 1.44.94 2.311.952z" />
    </svg>
  );
}

export const PACKAGE_MANAGERS: PackageManagerOption[] = [
  {
    id: 'npm',
    name: 'npm',
    cmd: 'npm i defeat-icons-react',
    Icon: NpmIcon,
    render: (pkgName = 'defeat-icons-react') => (
      <>
        <span className="font-bold text-[#cb3837]">npm</span>
        <span className="font-semibold text-violet-600"> i </span>
        <span className="font-semibold text-emerald-700">{pkgName}</span>
      </>
    ),
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    cmd: 'pnpm add defeat-icons-react',
    Icon: PnpmIcon,
    render: (pkgName = 'defeat-icons-react') => (
      <>
        <span className="font-bold text-amber-600">pnpm</span>
        <span className="font-semibold text-blue-600"> add </span>
        <span className="font-semibold text-emerald-700">{pkgName}</span>
      </>
    ),
  },
  {
    id: 'bun',
    name: 'bun',
    cmd: 'bun add defeat-icons-react',
    Icon: BunIcon,
    render: (pkgName = 'defeat-icons-react') => (
      <>
        <span className="font-bold text-orange-600">bun</span>
        <span className="font-semibold text-sky-600"> add </span>
        <span className="font-semibold text-emerald-700">{pkgName}</span>
      </>
    ),
  },
];

export const FRAMEWORKS: FrameworkOption[] = [
  {
    id: 'react',
    name: 'React',
    pkgPath: 'defeat-icons-react',
    IconComponent: ReactIcon,
    snippet: `import { Heart, Accessibility } from 'defeat-icons-react';

function App() {
  return (
    <div className="flex gap-4">
      <Heart className="size-6" />
      <Accessibility className="size-6" />
    </div>
  );
}`,
    lineCount: 10,
    renderCode: () => (
      <pre className="pl-3.5 text-zinc-800">
        <span className="text-purple-700 font-bold">import</span>
        <span className="text-zinc-600 font-medium"> {'{ '}</span>
        <span className="text-blue-700 font-bold">Heart</span>
        <span className="text-zinc-600 font-medium">, </span>
        <span className="text-blue-700 font-bold">Accessibility</span>
        <span className="text-zinc-600 font-medium">{' }'} </span>
        <span className="text-purple-700 font-bold">from</span>
        <span className="text-emerald-700 font-semibold"> 'defeat-icons-react'</span>
        <span className="text-zinc-600 font-medium">;</span>
        {'\n\n'}
        <span className="text-purple-700 font-bold">function</span>{' '}
        <span className="text-blue-700 font-bold">App</span>
        <span className="text-zinc-600 font-medium">() {'{'}</span>
        {'\n'}
        {'  '}
        <span className="text-purple-700 font-bold">return</span>
        <span className="text-zinc-600 font-medium"> (</span>
        {'\n'}
        {'    '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">div</span>{' '}
        <span className="text-amber-700 font-semibold">className</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"flex gap-4"</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'      '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Heart</span>{' '}
        <span className="text-amber-700 font-semibold">className</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'      '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Accessibility</span>{' '}
        <span className="text-amber-700 font-semibold">className</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'    '}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">div</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-zinc-600 font-medium">);</span>
        {'\n'}
        <span className="text-zinc-600 font-medium">{'}'}</span>
      </pre>
    ),
  },
  {
    id: 'vue',
    name: 'Vue',
    pkgPath: 'defeat-icons-vue',
    IconComponent: VueIcon,
    snippet: `<script setup>
import { Heart, Accessibility } from 'defeat-icons-vue';
</script>

<template>
  <div class="flex gap-4">
    <Heart class="size-6" />
    <Accessibility class="size-6" />
  </div>
</template>`,
    lineCount: 10,
    renderCode: () => (
      <pre className="pl-3.5 text-zinc-800">
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">script</span>{' '}
        <span className="text-amber-700 font-semibold">setup</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        <span className="text-purple-700 font-bold">import</span>
        <span className="text-zinc-600 font-medium"> {'{ '}</span>
        <span className="text-blue-700 font-bold">Heart</span>
        <span className="text-zinc-600 font-medium">, </span>
        <span className="text-blue-700 font-bold">Accessibility</span>
        <span className="text-zinc-600 font-medium">{' }'} </span>
        <span className="text-purple-700 font-bold">from</span>
        <span className="text-emerald-700 font-semibold"> 'defeat-icons-vue'</span>
        <span className="text-zinc-600 font-medium">;</span>
        {'\n'}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">script</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n\n'}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">template</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">div</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"flex gap-4"</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'    '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Heart</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'    '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Accessibility</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">div</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">template</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
      </pre>
    ),
  },
  {
    id: 'svelte',
    name: 'Svelte',
    pkgPath: 'defeat-icons-svelte',
    IconComponent: SvelteIcon,
    snippet: `<script>
  import { Heart, Accessibility } from 'defeat-icons-svelte';
</script>

<div class="flex gap-4">
  <Heart class="size-6" />
  <Accessibility class="size-6" />
</div>`,
    lineCount: 8,
    renderCode: () => (
      <pre className="pl-3.5 text-zinc-800">
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">script</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-purple-700 font-bold">import</span>
        <span className="text-zinc-600 font-medium"> {'{ '}</span>
        <span className="text-blue-700 font-bold">Heart</span>
        <span className="text-zinc-600 font-medium">, </span>
        <span className="text-blue-700 font-bold">Accessibility</span>
        <span className="text-zinc-600 font-medium">{' }'} </span>
        <span className="text-purple-700 font-bold">from</span>
        <span className="text-emerald-700 font-semibold"> 'defeat-icons-svelte'</span>
        <span className="text-zinc-600 font-medium">;</span>
        {'\n'}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">script</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n\n'}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">div</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"flex gap-4"</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Heart</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Accessibility</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">div</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
      </pre>
    ),
  },
  {
    id: 'solid',
    name: 'Solid',
    pkgPath: 'defeat-icons-solid',
    IconComponent: SolidIcon,
    snippet: `import { Heart, Accessibility } from 'defeat-icons-solid';

function App() {
  return (
    <div class="flex gap-4">
      <Heart class="size-6" />
      <Accessibility class="size-6" />
    </div>
  );
}`,
    lineCount: 10,
    renderCode: () => (
      <pre className="pl-3.5 text-zinc-800">
        <span className="text-purple-700 font-bold">import</span>
        <span className="text-zinc-600 font-medium"> {'{ '}</span>
        <span className="text-blue-700 font-bold">Heart</span>
        <span className="text-zinc-600 font-medium">, </span>
        <span className="text-blue-700 font-bold">Accessibility</span>
        <span className="text-zinc-600 font-medium">{' }'} </span>
        <span className="text-purple-700 font-bold">from</span>
        <span className="text-emerald-700 font-semibold"> 'defeat-icons-solid'</span>
        <span className="text-zinc-600 font-medium">;</span>
        {'\n\n'}
        <span className="text-purple-700 font-bold">function</span>{' '}
        <span className="text-blue-700 font-bold">App</span>
        <span className="text-zinc-600 font-medium">() {'{'}</span>
        {'\n'}
        {'  '}
        <span className="text-purple-700 font-bold">return</span>
        <span className="text-zinc-600 font-medium"> (</span>
        {'\n'}
        {'    '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-rose-600 font-bold">div</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"flex gap-4"</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'      '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Heart</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'      '}
        <span className="text-zinc-600 font-medium">&lt;</span>
        <span className="text-blue-700 font-bold">Accessibility</span>{' '}
        <span className="text-amber-700 font-semibold">class</span>
        <span className="text-zinc-600 font-medium">=</span>
        <span className="text-emerald-700 font-semibold">"size-6"</span>
        <span className="text-zinc-600 font-medium"> /&gt;</span>
        {'\n'}
        {'    '}
        <span className="text-zinc-600 font-medium">&lt;/</span>
        <span className="text-rose-600 font-bold">div</span>
        <span className="text-zinc-600 font-medium">&gt;</span>
        {'\n'}
        {'  '}
        <span className="text-zinc-600 font-medium">);</span>
        {'\n'}
        <span className="text-zinc-600 font-medium">{'}'}</span>
      </pre>
    ),
  },
];

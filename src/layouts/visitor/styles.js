import styled from 'styled-components';

import iPhoneImage from 'assets/img/visitor/iPhone.png';
import SamsungImage from 'assets/img/visitor/samsung.png';
import MacImage from 'assets/img/visitor/macbook@2.a0225cde.png';
import MobileImage from 'assets/img/visitor/visual-mobil@2.51eeb89e.jpg';
import AirplaneImage from 'assets/img/visitor/airplane.svg';
import AlertImage from 'assets/img/visitor/alert.svg';
import Bank from 'assets/img/visitor/bank.svg';
import BarImage from 'assets/img/visitor/bar-chart.svg';
import CashImage from 'assets/img/visitor/cash.svg';
import CircleImage from 'assets/img/visitor/circle-green.svg';
import CloudImage from 'assets/img/visitor/cloud.svg';
import CurrencyImage from 'assets/img/visitor/currency.svg';
import DashboardImage from 'assets/img/visitor/dashboard.svg';
import DownImage from 'assets/img/visitor/down.svg';
import FacebookImage from 'assets/img/visitor/facebook.svg';
import InstagramImage from 'assets/img/visitor/instagram.svg';
import KnifeImage from 'assets/img/visitor/knife.svg';
import LighteningImage from 'assets/img/visitor/lightening.svg';
import ModalImage from 'assets/img/visitor/modal-bg.6ba7d9cc.svg';
import PersonImage from 'assets/img/visitor/person.svg';
import PiechartImage from 'assets/img/visitor/pie-chart.svg';
import TwitterImage from 'assets/img/visitor/twitter.svg';
import UpImage from 'assets/img/visitor/up.svg';
import WalletImage from 'assets/img/visitor/wallet.svg';

const HomepageStyles = styled.div`
    *,
    :after,
    :before {
    box-sizing: border-box;
    }
    html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    article,
    aside,
    dialog,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
    display: block;
    }
    .page {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica Neue, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
    }
    [tabindex="-1"]:focus {
    outline: 0 !important;
    }
    hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    }
    p {
    margin-top: 0;
    margin-bottom: 1rem;
    }
    abbr[data-original-title],
    abbr[title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    }
    address {
    font-style: normal;
    line-height: inherit;
    }
    address,
    dl,
    ol,
    ul {
    margin-bottom: 1rem;
    }
    dl,
    ol,
    ul {
    margin-top: 0;
    }
    ol ol,
    ol ul,
    ul ol,
    ul ul {
    margin-bottom: 0;
    }
    dt {
    font-weight: 700;
    }
    dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
    }
    blockquote {
    margin: 0 0 1rem;
    }
    dfn {
    font-style: italic;
    }
    b,
    strong {
    font-weight: bolder;
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
    }
    sub {
    bottom: -0.25em;
    }
    sup {
    top: -0.5em;
    }
    a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    }
    a:hover {
    color: #0056b3;
    text-decoration: underline;
    }
    a:not([href]):not([tabindex]),
    a:not([href]):not([tabindex]):focus,
    a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none;
    }
    a:not([href]):not([tabindex]):focus {
    outline: 0;
    }
    code,
    kbd,
    pre,
    samp {
    font-family: monospace, monospace;
    font-size: 1em;
    }
    pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
    }
    figure {
    margin: 0 0 1rem;
    }
    img {
    vertical-align: middle;
    border-style: none;
    }
    svg:not(:root) {
    overflow: hidden;
    }
    table {
    border-collapse: collapse;
    }
    caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
    }
    th {
    text-align: inherit;
    }
    label {
    display: inline-block;
    margin-bottom: 0.5rem;
    }
    button {
    border-radius: 0;
    }
    button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    }
    button,
    input {
    overflow: visible;
    }
    button,
    select {
    text-transform: none;
    }
    [type="reset"],
    [type="submit"],
    button,
    html [type="button"] {
    -webkit-appearance: button;
    }
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner,
    button::-moz-focus-inner {
    padding: 0;
    border-style: none;
    }
    input[type="checkbox"],
    input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    }
    input[type="date"],
    input[type="datetime-local"],
    input[type="month"],
    input[type="time"] {
    -webkit-appearance: listbox;
    }
    textarea {
    overflow: auto;
    resize: vertical;
    }
    fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
    }
    legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
    }
    progress {
    vertical-align: baseline;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
    }
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
    }
    output {
    display: inline-block;
    }
    summary {
    display: list-item;
    cursor: pointer;
    }
    template {
    display: none;
    }
    [hidden] {
    display: none !important;
    }
    .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }
    @media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
    }
    @media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
    }
    @media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
    }
    @media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
    }
    .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }
    .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    }
    .no-gutters {
    margin-right: 0;
    margin-left: 0;
    }
    .no-gutters > .col,
    .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
    }
    .col,
    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-10,
    .col-11,
    .col-12,
    .col-auto,
    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-auto,
    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-auto,
    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-auto,
    .col-xl,
    .col-xl-1,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    }
    .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    }
    .col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
    }
    .col-1 {
    -ms-flex: 0 0 8.33333%;
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
    }
    .col-2 {
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    }
    .col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    }
    .col-4 {
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    }
    .col-5 {
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
    }
    .col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    }
    .col-7 {
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
    }
    .col-8 {
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
    }
    .col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
    }
    .col-10 {
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    }
    .col-11 {
    -ms-flex: 0 0 91.66667%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
    }
    .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    }
    .order-first {
    -ms-flex-order: -1;
    order: -1;
    }
    .order-last {
    -ms-flex-order: 13;
    order: 13;
    }
    .order-0 {
    -ms-flex-order: 0;
    order: 0;
    }
    .order-1 {
    -ms-flex-order: 1;
    order: 1;
    }
    .order-2 {
    -ms-flex-order: 2;
    order: 2;
    }
    .order-3 {
    -ms-flex-order: 3;
    order: 3;
    }
    .order-4 {
    -ms-flex-order: 4;
    order: 4;
    }
    .order-5 {
    -ms-flex-order: 5;
    order: 5;
    }
    .order-6 {
    -ms-flex-order: 6;
    order: 6;
    }
    .order-7 {
    -ms-flex-order: 7;
    order: 7;
    }
    .order-8 {
    -ms-flex-order: 8;
    order: 8;
    }
    .order-9 {
    -ms-flex-order: 9;
    order: 9;
    }
    .order-10 {
    -ms-flex-order: 10;
    order: 10;
    }
    .order-11 {
    -ms-flex-order: 11;
    order: 11;
    }
    .order-12 {
    -ms-flex-order: 12;
    order: 12;
    }
    .offset-1 {
    margin-left: 8.33333%;
    }
    .offset-2 {
    margin-left: 16.66667%;
    }
    .offset-3 {
    margin-left: 25%;
    }
    .offset-4 {
    margin-left: 33.33333%;
    }
    .offset-5 {
    margin-left: 41.66667%;
    }
    .offset-6 {
    margin-left: 50%;
    }
    .offset-7 {
    margin-left: 58.33333%;
    }
    .offset-8 {
    margin-left: 66.66667%;
    }
    .offset-9 {
    margin-left: 75%;
    }
    .offset-10 {
    margin-left: 83.33333%;
    }
    .offset-11 {
    margin-left: 91.66667%;
    }
    @media (min-width: 576px) {
    .col-sm {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-sm-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-sm-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-sm-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-sm-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-sm-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-sm-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-sm-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-sm-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-sm-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-sm-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-sm-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-sm-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-sm-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-sm-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-sm-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-sm-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-sm-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-sm-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-sm-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-sm-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-sm-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-sm-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-sm-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-sm-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-sm-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-sm-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-sm-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-sm-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-sm-0 {
        margin-left: 0;
    }
    .offset-sm-1 {
        margin-left: 8.33333%;
    }
    .offset-sm-2 {
        margin-left: 16.66667%;
    }
    .offset-sm-3 {
        margin-left: 25%;
    }
    .offset-sm-4 {
        margin-left: 33.33333%;
    }
    .offset-sm-5 {
        margin-left: 41.66667%;
    }
    .offset-sm-6 {
        margin-left: 50%;
    }
    .offset-sm-7 {
        margin-left: 58.33333%;
    }
    .offset-sm-8 {
        margin-left: 66.66667%;
    }
    .offset-sm-9 {
        margin-left: 75%;
    }
    .offset-sm-10 {
        margin-left: 83.33333%;
    }
    .offset-sm-11 {
        margin-left: 91.66667%;
    }
    }
    @media (min-width: 768px) {
    .col-md {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-md-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-md-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-md-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-md-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-md-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-md-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-md-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-md-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-md-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-md-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-md-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-md-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-md-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-md-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-md-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-md-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-md-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-md-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-md-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-md-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-md-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-md-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-md-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-md-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-md-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-md-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-md-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-md-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-md-0 {
        margin-left: 0;
    }
    .offset-md-1 {
        margin-left: 8.33333%;
    }
    .offset-md-2 {
        margin-left: 16.66667%;
    }
    .offset-md-3 {
        margin-left: 25%;
    }
    .offset-md-4 {
        margin-left: 33.33333%;
    }
    .offset-md-5 {
        margin-left: 41.66667%;
    }
    .offset-md-6 {
        margin-left: 50%;
    }
    .offset-md-7 {
        margin-left: 58.33333%;
    }
    .offset-md-8 {
        margin-left: 66.66667%;
    }
    .offset-md-9 {
        margin-left: 75%;
    }
    .offset-md-10 {
        margin-left: 83.33333%;
    }
    .offset-md-11 {
        margin-left: 91.66667%;
    }
    }
    @media (min-width: 992px) {
    .col-lg {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-lg-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-lg-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-lg-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-lg-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lg-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-lg-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-lg-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lg-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-lg-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-lg-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lg-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-lg-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-lg-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-lg-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-lg-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-lg-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-lg-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-lg-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-lg-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-lg-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-lg-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-lg-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-lg-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-lg-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-lg-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-lg-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-lg-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-lg-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-lg-0 {
        margin-left: 0;
    }
    .offset-lg-1 {
        margin-left: 8.33333%;
    }
    .offset-lg-2 {
        margin-left: 16.66667%;
    }
    .offset-lg-3 {
        margin-left: 25%;
    }
    .offset-lg-4 {
        margin-left: 33.33333%;
    }
    .offset-lg-5 {
        margin-left: 41.66667%;
    }
    .offset-lg-6 {
        margin-left: 50%;
    }
    .offset-lg-7 {
        margin-left: 58.33333%;
    }
    .offset-lg-8 {
        margin-left: 66.66667%;
    }
    .offset-lg-9 {
        margin-left: 75%;
    }
    .offset-lg-10 {
        margin-left: 83.33333%;
    }
    .offset-lg-11 {
        margin-left: 91.66667%;
    }
    }
    @media (min-width: 1200px) {
    .col-xl {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-xl-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-xl-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-xl-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-xl-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-xl-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-xl-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-xl-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-xl-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-xl-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-xl-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-xl-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-xl-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-xl-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-xl-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-xl-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-xl-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-xl-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-xl-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-xl-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-xl-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-xl-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-xl-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-xl-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-xl-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-xl-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-xl-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-xl-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-xl-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-xl-0 {
        margin-left: 0;
    }
    .offset-xl-1 {
        margin-left: 8.33333%;
    }
    .offset-xl-2 {
        margin-left: 16.66667%;
    }
    .offset-xl-3 {
        margin-left: 25%;
    }
    .offset-xl-4 {
        margin-left: 33.33333%;
    }
    .offset-xl-5 {
        margin-left: 41.66667%;
    }
    .offset-xl-6 {
        margin-left: 50%;
    }
    .offset-xl-7 {
        margin-left: 58.33333%;
    }
    .offset-xl-8 {
        margin-left: 66.66667%;
    }
    .offset-xl-9 {
        margin-left: 75%;
    }
    .offset-xl-10 {
        margin-left: 83.33333%;
    }
    .offset-xl-11 {
        margin-left: 91.66667%;
    }
    }
    .flex-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
    }
    .flex-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
    }
    .flex-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
    }
    .flex-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
    }
    .flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
    }
    .flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
    }
    .flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
    }
    .justify-content-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
    }
    .justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
    }
    .justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
    }
    .justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
    }
    .justify-content-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
    }
    .align-items-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
    }
    .align-items-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
    }
    .align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
    }
    .align-items-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
    }
    .align-items-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
    }
    .align-content-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
    }
    .align-content-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
    }
    .align-content-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
    }
    .align-content-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
    }
    .align-content-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
    }
    .align-content-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
    }
    .align-self-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
    }
    .align-self-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
    }
    .align-self-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
    }
    .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
    }
    .align-self-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
    }
    .align-self-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
    }
    @media (min-width: 576px) {
    .flex-sm-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-sm-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-sm-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-sm-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .justify-content-sm-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-sm-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-sm-center {
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-sm-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-sm-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-sm-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-sm-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-sm-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-sm-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-sm-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-sm-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-sm-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-sm-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-sm-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-sm-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-sm-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-sm-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-sm-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-sm-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-sm-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-sm-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-sm-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
    }
    @media (min-width: 768px) {
    .flex-md-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-md-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-md-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-md-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .justify-content-md-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-md-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-md-center {
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-md-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-md-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-md-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-md-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-md-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-md-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-md-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-md-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-md-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-md-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-md-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-md-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-md-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-md-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-md-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-md-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-md-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-md-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-md-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
    }
    @media (min-width: 992px) {
    .flex-lg-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-lg-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-lg-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-lg-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .justify-content-lg-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-lg-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-lg-center {
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-lg-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-lg-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-lg-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-lg-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-lg-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-lg-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-lg-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-lg-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-lg-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-lg-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-lg-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-lg-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-lg-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-lg-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-lg-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-lg-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-lg-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-lg-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-lg-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
    }
    @media (min-width: 1200px) {
    .flex-xl-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-xl-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-xl-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-xl-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .justify-content-xl-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-xl-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-xl-center {
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-xl-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-xl-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-xl-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-xl-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-xl-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-xl-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-xl-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-xl-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-xl-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-xl-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-xl-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-xl-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-xl-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-xl-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-xl-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-xl-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-xl-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-xl-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-xl-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
    }
    .d-none {
    display: none !important;
    }
    .d-inline {
    display: inline !important;
    }
    .d-inline-block {
    display: inline-block !important;
    }
    .d-block {
    display: block !important;
    }
    .d-table {
    display: table !important;
    }
    .d-table-row {
    display: table-row !important;
    }
    .d-table-cell {
    display: table-cell !important;
    }
    .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
    }
    .d-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
    }
    @media (min-width: 576px) {
    .d-sm-none {
        display: none !important;
    }
    .d-sm-inline {
        display: inline !important;
    }
    .d-sm-inline-block {
        display: inline-block !important;
    }
    .d-sm-block {
        display: block !important;
    }
    .d-sm-table {
        display: table !important;
    }
    .d-sm-table-row {
        display: table-row !important;
    }
    .d-sm-table-cell {
        display: table-cell !important;
    }
    .d-sm-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-sm-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
    }
    @media (min-width: 768px) {
    .d-md-none {
        display: none !important;
    }
    .d-md-inline {
        display: inline !important;
    }
    .d-md-inline-block {
        display: inline-block !important;
    }
    .d-md-block {
        display: block !important;
    }
    .d-md-table {
        display: table !important;
    }
    .d-md-table-row {
        display: table-row !important;
    }
    .d-md-table-cell {
        display: table-cell !important;
    }
    .d-md-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-md-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
    }
    @media (min-width: 992px) {
    .d-lg-none {
        display: none !important;
    }
    .d-lg-inline {
        display: inline !important;
    }
    .d-lg-inline-block {
        display: inline-block !important;
    }
    .d-lg-block {
        display: block !important;
    }
    .d-lg-table {
        display: table !important;
    }
    .d-lg-table-row {
        display: table-row !important;
    }
    .d-lg-table-cell {
        display: table-cell !important;
    }
    .d-lg-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-lg-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
    }
    @media (min-width: 1200px) {
    .d-xl-none {
        display: none !important;
    }
    .d-xl-inline {
        display: inline !important;
    }
    .d-xl-inline-block {
        display: inline-block !important;
    }
    .d-xl-block {
        display: block !important;
    }
    .d-xl-table {
        display: table !important;
    }
    .d-xl-table-row {
        display: table-row !important;
    }
    .d-xl-table-cell {
        display: table-cell !important;
    }
    .d-xl-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-xl-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
    }
    @media print {
    .d-print-none {
        display: none !important;
    }
    .d-print-inline {
        display: inline !important;
    }
    .d-print-inline-block {
        display: inline-block !important;
    }
    .d-print-block {
        display: block !important;
    }
    .d-print-table {
        display: table !important;
    }
    .d-print-table-row {
        display: table-row !important;
    }
    .d-print-table-cell {
        display: table-cell !important;
    }
    .d-print-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-print-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
    }
    .m-0 {
    margin: 0 !important;
    }
    .mt-0,
    .my-0 {
    margin-top: 0 !important;
    }
    .mr-0,
    .mx-0 {
    margin-right: 0 !important;
    }
    .mb-0,
    .my-0 {
    margin-bottom: 0 !important;
    }
    .ml-0,
    .mx-0 {
    margin-left: 0 !important;
    }
    .m-1 {
    margin: 0.25rem !important;
    }
    .mt-1,
    .my-1 {
    margin-top: 0.25rem !important;
    }
    .mr-1,
    .mx-1 {
    margin-right: 0.25rem !important;
    }
    .mb-1,
    .my-1 {
    margin-bottom: 0.25rem !important;
    }
    .ml-1,
    .mx-1 {
    margin-left: 0.25rem !important;
    }
    .m-2 {
    margin: 0.5rem !important;
    }
    .mt-2,
    .my-2 {
    margin-top: 0.5rem !important;
    }
    .mr-2,
    .mx-2 {
    margin-right: 0.5rem !important;
    }
    .mb-2,
    .my-2 {
    margin-bottom: 0.5rem !important;
    }
    .ml-2,
    .mx-2 {
    margin-left: 0.5rem !important;
    }
    .m-3 {
    margin: 1rem !important;
    }
    .mt-3,
    .my-3 {
    margin-top: 1rem !important;
    }
    .mr-3,
    .mx-3 {
    margin-right: 1rem !important;
    }
    .mb-3,
    .my-3 {
    margin-bottom: 1rem !important;
    }
    .ml-3,
    .mx-3 {
    margin-left: 1rem !important;
    }
    .m-4 {
    margin: 2rem !important;
    }
    .mt-4,
    .my-4 {
    margin-top: 2rem !important;
    }
    .mr-4,
    .mx-4 {
    margin-right: 2rem !important;
    }
    .mb-4,
    .my-4 {
    margin-bottom: 2rem !important;
    }
    .ml-4,
    .mx-4 {
    margin-left: 2rem !important;
    }
    .m-5 {
    margin: 5rem !important;
    }
    .mt-5,
    .my-5 {
    margin-top: 5rem !important;
    }
    .mr-5,
    .mx-5 {
    margin-right: 5rem !important;
    }
    .mb-5,
    .my-5 {
    margin-bottom: 5rem !important;
    }
    .ml-5,
    .mx-5 {
    margin-left: 5rem !important;
    }
    .m-6 {
    margin: 6.25rem !important;
    }
    .mt-6,
    .my-6 {
    margin-top: 6.25rem !important;
    }
    .mr-6,
    .mx-6 {
    margin-right: 6.25rem !important;
    }
    .mb-6,
    .my-6 {
    margin-bottom: 6.25rem !important;
    }
    .ml-6,
    .mx-6 {
    margin-left: 6.25rem !important;
    }
    .m-7 {
    margin: 7.25rem !important;
    }
    .mt-7,
    .my-7 {
    margin-top: 7.25rem !important;
    }
    .mr-7,
    .mx-7 {
    margin-right: 7.25rem !important;
    }
    .mb-7,
    .my-7 {
    margin-bottom: 7.25rem !important;
    }
    .ml-7,
    .mx-7 {
    margin-left: 7.25rem !important;
    }
    .p-0 {
    padding: 0 !important;
    }
    .pt-0,
    .py-0 {
    padding-top: 0 !important;
    }
    .pr-0,
    .px-0 {
    padding-right: 0 !important;
    }
    .pb-0,
    .py-0 {
    padding-bottom: 0 !important;
    }
    .pl-0,
    .px-0 {
    padding-left: 0 !important;
    }
    .p-1 {
    padding: 0.25rem !important;
    }
    .pt-1,
    .py-1 {
    padding-top: 0.25rem !important;
    }
    .pr-1,
    .px-1 {
    padding-right: 0.25rem !important;
    }
    .pb-1,
    .py-1 {
    padding-bottom: 0.25rem !important;
    }
    .pl-1,
    .px-1 {
    padding-left: 0.25rem !important;
    }
    .p-2 {
    padding: 0.5rem !important;
    }
    .pt-2,
    .py-2 {
    padding-top: 0.5rem !important;
    }
    .pr-2,
    .px-2 {
    padding-right: 0.5rem !important;
    }
    .pb-2,
    .py-2 {
    padding-bottom: 0.5rem !important;
    }
    .pl-2,
    .px-2 {
    padding-left: 0.5rem !important;
    }
    .p-3 {
    padding: 1rem !important;
    }
    .pt-3,
    .py-3 {
    padding-top: 1rem !important;
    }
    .pr-3,
    .px-3 {
    padding-right: 1rem !important;
    }
    .pb-3,
    .py-3 {
    padding-bottom: 1rem !important;
    }
    .pl-3,
    .px-3 {
    padding-left: 1rem !important;
    }
    .p-4 {
    padding: 2rem !important;
    }
    .pt-4,
    .py-4 {
    padding-top: 2rem !important;
    }
    .pr-4,
    .px-4 {
    padding-right: 2rem !important;
    }
    .pb-4,
    .py-4 {
    padding-bottom: 2rem !important;
    }
    .pl-4,
    .px-4 {
    padding-left: 2rem !important;
    }
    .p-5 {
    padding: 5rem !important;
    }
    .pt-5,
    .py-5 {
    padding-top: 5rem !important;
    }
    .pr-5,
    .px-5 {
    padding-right: 5rem !important;
    }
    .pb-5,
    .py-5 {
    padding-bottom: 5rem !important;
    }
    .pl-5,
    .px-5 {
    padding-left: 5rem !important;
    }
    .p-6 {
    padding: 6.25rem !important;
    }
    .pt-6,
    .py-6 {
    padding-top: 6.25rem !important;
    }
    .pr-6,
    .px-6 {
    padding-right: 6.25rem !important;
    }
    .pb-6,
    .py-6 {
    padding-bottom: 6.25rem !important;
    }
    .pl-6,
    .px-6 {
    padding-left: 6.25rem !important;
    }
    .p-7 {
    padding: 7.25rem !important;
    }
    .pt-7,
    .py-7 {
    padding-top: 7.25rem !important;
    }
    .pr-7,
    .px-7 {
    padding-right: 7.25rem !important;
    }
    .pb-7,
    .py-7 {
    padding-bottom: 7.25rem !important;
    }
    .pl-7,
    .px-7 {
    padding-left: 7.25rem !important;
    }
    .m-auto {
    margin: auto !important;
    }
    .mt-auto,
    .my-auto {
    margin-top: auto !important;
    }
    .mr-auto,
    .mx-auto {
    margin-right: auto !important;
    }
    .mb-auto,
    .my-auto {
    margin-bottom: auto !important;
    }
    .ml-auto,
    .mx-auto {
    margin-left: auto !important;
    }
    @media (min-width: 576px) {
    .m-sm-0 {
        margin: 0 !important;
    }
    .mt-sm-0,
    .my-sm-0 {
        margin-top: 0 !important;
    }
    .mr-sm-0,
    .mx-sm-0 {
        margin-right: 0 !important;
    }
    .mb-sm-0,
    .my-sm-0 {
        margin-bottom: 0 !important;
    }
    .ml-sm-0,
    .mx-sm-0 {
        margin-left: 0 !important;
    }
    .m-sm-1 {
        margin: 0.25rem !important;
    }
    .mt-sm-1,
    .my-sm-1 {
        margin-top: 0.25rem !important;
    }
    .mr-sm-1,
    .mx-sm-1 {
        margin-right: 0.25rem !important;
    }
    .mb-sm-1,
    .my-sm-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-sm-1,
    .mx-sm-1 {
        margin-left: 0.25rem !important;
    }
    .m-sm-2 {
        margin: 0.5rem !important;
    }
    .mt-sm-2,
    .my-sm-2 {
        margin-top: 0.5rem !important;
    }
    .mr-sm-2,
    .mx-sm-2 {
        margin-right: 0.5rem !important;
    }
    .mb-sm-2,
    .my-sm-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-sm-2,
    .mx-sm-2 {
        margin-left: 0.5rem !important;
    }
    .m-sm-3 {
        margin: 1rem !important;
    }
    .mt-sm-3,
    .my-sm-3 {
        margin-top: 1rem !important;
    }
    .mr-sm-3,
    .mx-sm-3 {
        margin-right: 1rem !important;
    }
    .mb-sm-3,
    .my-sm-3 {
        margin-bottom: 1rem !important;
    }
    .ml-sm-3,
    .mx-sm-3 {
        margin-left: 1rem !important;
    }
    .m-sm-4 {
        margin: 2rem !important;
    }
    .mt-sm-4,
    .my-sm-4 {
        margin-top: 2rem !important;
    }
    .mr-sm-4,
    .mx-sm-4 {
        margin-right: 2rem !important;
    }
    .mb-sm-4,
    .my-sm-4 {
        margin-bottom: 2rem !important;
    }
    .ml-sm-4,
    .mx-sm-4 {
        margin-left: 2rem !important;
    }
    .m-sm-5 {
        margin: 5rem !important;
    }
    .mt-sm-5,
    .my-sm-5 {
        margin-top: 5rem !important;
    }
    .mr-sm-5,
    .mx-sm-5 {
        margin-right: 5rem !important;
    }
    .mb-sm-5,
    .my-sm-5 {
        margin-bottom: 5rem !important;
    }
    .ml-sm-5,
    .mx-sm-5 {
        margin-left: 5rem !important;
    }
    .m-sm-6 {
        margin: 6.25rem !important;
    }
    .mt-sm-6,
    .my-sm-6 {
        margin-top: 6.25rem !important;
    }
    .mr-sm-6,
    .mx-sm-6 {
        margin-right: 6.25rem !important;
    }
    .mb-sm-6,
    .my-sm-6 {
        margin-bottom: 6.25rem !important;
    }
    .ml-sm-6,
    .mx-sm-6 {
        margin-left: 6.25rem !important;
    }
    .m-sm-7 {
        margin: 7.25rem !important;
    }
    .mt-sm-7,
    .my-sm-7 {
        margin-top: 7.25rem !important;
    }
    .mr-sm-7,
    .mx-sm-7 {
        margin-right: 7.25rem !important;
    }
    .mb-sm-7,
    .my-sm-7 {
        margin-bottom: 7.25rem !important;
    }
    .ml-sm-7,
    .mx-sm-7 {
        margin-left: 7.25rem !important;
    }
    .p-sm-0 {
        padding: 0 !important;
    }
    .pt-sm-0,
    .py-sm-0 {
        padding-top: 0 !important;
    }
    .pr-sm-0,
    .px-sm-0 {
        padding-right: 0 !important;
    }
    .pb-sm-0,
    .py-sm-0 {
        padding-bottom: 0 !important;
    }
    .pl-sm-0,
    .px-sm-0 {
        padding-left: 0 !important;
    }
    .p-sm-1 {
        padding: 0.25rem !important;
    }
    .pt-sm-1,
    .py-sm-1 {
        padding-top: 0.25rem !important;
    }
    .pr-sm-1,
    .px-sm-1 {
        padding-right: 0.25rem !important;
    }
    .pb-sm-1,
    .py-sm-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-sm-1,
    .px-sm-1 {
        padding-left: 0.25rem !important;
    }
    .p-sm-2 {
        padding: 0.5rem !important;
    }
    .pt-sm-2,
    .py-sm-2 {
        padding-top: 0.5rem !important;
    }
    .pr-sm-2,
    .px-sm-2 {
        padding-right: 0.5rem !important;
    }
    .pb-sm-2,
    .py-sm-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-sm-2,
    .px-sm-2 {
        padding-left: 0.5rem !important;
    }
    .p-sm-3 {
        padding: 1rem !important;
    }
    .pt-sm-3,
    .py-sm-3 {
        padding-top: 1rem !important;
    }
    .pr-sm-3,
    .px-sm-3 {
        padding-right: 1rem !important;
    }
    .pb-sm-3,
    .py-sm-3 {
        padding-bottom: 1rem !important;
    }
    .pl-sm-3,
    .px-sm-3 {
        padding-left: 1rem !important;
    }
    .p-sm-4 {
        padding: 2rem !important;
    }
    .pt-sm-4,
    .py-sm-4 {
        padding-top: 2rem !important;
    }
    .pr-sm-4,
    .px-sm-4 {
        padding-right: 2rem !important;
    }
    .pb-sm-4,
    .py-sm-4 {
        padding-bottom: 2rem !important;
    }
    .pl-sm-4,
    .px-sm-4 {
        padding-left: 2rem !important;
    }
    .p-sm-5 {
        padding: 5rem !important;
    }
    .pt-sm-5,
    .py-sm-5 {
        padding-top: 5rem !important;
    }
    .pr-sm-5,
    .px-sm-5 {
        padding-right: 5rem !important;
    }
    .pb-sm-5,
    .py-sm-5 {
        padding-bottom: 5rem !important;
    }
    .pl-sm-5,
    .px-sm-5 {
        padding-left: 5rem !important;
    }
    .p-sm-6 {
        padding: 6.25rem !important;
    }
    .pt-sm-6,
    .py-sm-6 {
        padding-top: 6.25rem !important;
    }
    .pr-sm-6,
    .px-sm-6 {
        padding-right: 6.25rem !important;
    }
    .pb-sm-6,
    .py-sm-6 {
        padding-bottom: 6.25rem !important;
    }
    .pl-sm-6,
    .px-sm-6 {
        padding-left: 6.25rem !important;
    }
    .p-sm-7 {
        padding: 7.25rem !important;
    }
    .pt-sm-7,
    .py-sm-7 {
        padding-top: 7.25rem !important;
    }
    .pr-sm-7,
    .px-sm-7 {
        padding-right: 7.25rem !important;
    }
    .pb-sm-7,
    .py-sm-7 {
        padding-bottom: 7.25rem !important;
    }
    .pl-sm-7,
    .px-sm-7 {
        padding-left: 7.25rem !important;
    }
    .m-sm-auto {
        margin: auto !important;
    }
    .mt-sm-auto,
    .my-sm-auto {
        margin-top: auto !important;
    }
    .mr-sm-auto,
    .mx-sm-auto {
        margin-right: auto !important;
    }
    .mb-sm-auto,
    .my-sm-auto {
        margin-bottom: auto !important;
    }
    .ml-sm-auto,
    .mx-sm-auto {
        margin-left: auto !important;
    }
    }
    @media (min-width: 768px) {
    .m-md-0 {
        margin: 0 !important;
    }
    .mt-md-0,
    .my-md-0 {
        margin-top: 0 !important;
    }
    .mr-md-0,
    .mx-md-0 {
        margin-right: 0 !important;
    }
    .mb-md-0,
    .my-md-0 {
        margin-bottom: 0 !important;
    }
    .ml-md-0,
    .mx-md-0 {
        margin-left: 0 !important;
    }
    .m-md-1 {
        margin: 0.25rem !important;
    }
    .mt-md-1,
    .my-md-1 {
        margin-top: 0.25rem !important;
    }
    .mr-md-1,
    .mx-md-1 {
        margin-right: 0.25rem !important;
    }
    .mb-md-1,
    .my-md-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-md-1,
    .mx-md-1 {
        margin-left: 0.25rem !important;
    }
    .m-md-2 {
        margin: 0.5rem !important;
    }
    .mt-md-2,
    .my-md-2 {
        margin-top: 0.5rem !important;
    }
    .mr-md-2,
    .mx-md-2 {
        margin-right: 0.5rem !important;
    }
    .mb-md-2,
    .my-md-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-md-2,
    .mx-md-2 {
        margin-left: 0.5rem !important;
    }
    .m-md-3 {
        margin: 1rem !important;
    }
    .mt-md-3,
    .my-md-3 {
        margin-top: 1rem !important;
    }
    .mr-md-3,
    .mx-md-3 {
        margin-right: 1rem !important;
    }
    .mb-md-3,
    .my-md-3 {
        margin-bottom: 1rem !important;
    }
    .ml-md-3,
    .mx-md-3 {
        margin-left: 1rem !important;
    }
    .m-md-4 {
        margin: 2rem !important;
    }
    .mt-md-4,
    .my-md-4 {
        margin-top: 2rem !important;
    }
    .mr-md-4,
    .mx-md-4 {
        margin-right: 2rem !important;
    }
    .mb-md-4,
    .my-md-4 {
        margin-bottom: 2rem !important;
    }
    .ml-md-4,
    .mx-md-4 {
        margin-left: 2rem !important;
    }
    .m-md-5 {
        margin: 5rem !important;
    }
    .mt-md-5,
    .my-md-5 {
        margin-top: 5rem !important;
    }
    .mr-md-5,
    .mx-md-5 {
        margin-right: 5rem !important;
    }
    .mb-md-5,
    .my-md-5 {
        margin-bottom: 5rem !important;
    }
    .ml-md-5,
    .mx-md-5 {
        margin-left: 5rem !important;
    }
    .m-md-6 {
        margin: 6.25rem !important;
    }
    .mt-md-6,
    .my-md-6 {
        margin-top: 6.25rem !important;
    }
    .mr-md-6,
    .mx-md-6 {
        margin-right: 6.25rem !important;
    }
    .mb-md-6,
    .my-md-6 {
        margin-bottom: 6.25rem !important;
    }
    .ml-md-6,
    .mx-md-6 {
        margin-left: 6.25rem !important;
    }
    .m-md-7 {
        margin: 7.25rem !important;
    }
    .mt-md-7,
    .my-md-7 {
        margin-top: 7.25rem !important;
    }
    .mr-md-7,
    .mx-md-7 {
        margin-right: 7.25rem !important;
    }
    .mb-md-7,
    .my-md-7 {
        margin-bottom: 7.25rem !important;
    }
    .ml-md-7,
    .mx-md-7 {
        margin-left: 7.25rem !important;
    }
    .p-md-0 {
        padding: 0 !important;
    }
    .pt-md-0,
    .py-md-0 {
        padding-top: 0 !important;
    }
    .pr-md-0,
    .px-md-0 {
        padding-right: 0 !important;
    }
    .pb-md-0,
    .py-md-0 {
        padding-bottom: 0 !important;
    }
    .pl-md-0,
    .px-md-0 {
        padding-left: 0 !important;
    }
    .p-md-1 {
        padding: 0.25rem !important;
    }
    .pt-md-1,
    .py-md-1 {
        padding-top: 0.25rem !important;
    }
    .pr-md-1,
    .px-md-1 {
        padding-right: 0.25rem !important;
    }
    .pb-md-1,
    .py-md-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-md-1,
    .px-md-1 {
        padding-left: 0.25rem !important;
    }
    .p-md-2 {
        padding: 0.5rem !important;
    }
    .pt-md-2,
    .py-md-2 {
        padding-top: 0.5rem !important;
    }
    .pr-md-2,
    .px-md-2 {
        padding-right: 0.5rem !important;
    }
    .pb-md-2,
    .py-md-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-md-2,
    .px-md-2 {
        padding-left: 0.5rem !important;
    }
    .p-md-3 {
        padding: 1rem !important;
    }
    .pt-md-3,
    .py-md-3 {
        padding-top: 1rem !important;
    }
    .pr-md-3,
    .px-md-3 {
        padding-right: 1rem !important;
    }
    .pb-md-3,
    .py-md-3 {
        padding-bottom: 1rem !important;
    }
    .pl-md-3,
    .px-md-3 {
        padding-left: 1rem !important;
    }
    .p-md-4 {
        padding: 2rem !important;
    }
    .pt-md-4,
    .py-md-4 {
        padding-top: 2rem !important;
    }
    .pr-md-4,
    .px-md-4 {
        padding-right: 2rem !important;
    }
    .pb-md-4,
    .py-md-4 {
        padding-bottom: 2rem !important;
    }
    .pl-md-4,
    .px-md-4 {
        padding-left: 2rem !important;
    }
    .p-md-5 {
        padding: 5rem !important;
    }
    .pt-md-5,
    .py-md-5 {
        padding-top: 5rem !important;
    }
    .pr-md-5,
    .px-md-5 {
        padding-right: 5rem !important;
    }
    .pb-md-5,
    .py-md-5 {
        padding-bottom: 5rem !important;
    }
    .pl-md-5,
    .px-md-5 {
        padding-left: 5rem !important;
    }
    .p-md-6 {
        padding: 6.25rem !important;
    }
    .pt-md-6,
    .py-md-6 {
        padding-top: 6.25rem !important;
    }
    .pr-md-6,
    .px-md-6 {
        padding-right: 6.25rem !important;
    }
    .pb-md-6,
    .py-md-6 {
        padding-bottom: 6.25rem !important;
    }
    .pl-md-6,
    .px-md-6 {
        padding-left: 6.25rem !important;
    }
    .p-md-7 {
        padding: 7.25rem !important;
    }
    .pt-md-7,
    .py-md-7 {
        padding-top: 7.25rem !important;
    }
    .pr-md-7,
    .px-md-7 {
        padding-right: 7.25rem !important;
    }
    .pb-md-7,
    .py-md-7 {
        padding-bottom: 7.25rem !important;
    }
    .pl-md-7,
    .px-md-7 {
        padding-left: 7.25rem !important;
    }
    .m-md-auto {
        margin: auto !important;
    }
    .mt-md-auto,
    .my-md-auto {
        margin-top: auto !important;
    }
    .mr-md-auto,
    .mx-md-auto {
        margin-right: auto !important;
    }
    .mb-md-auto,
    .my-md-auto {
        margin-bottom: auto !important;
    }
    .ml-md-auto,
    .mx-md-auto {
        margin-left: auto !important;
    }
    }
    @media (min-width: 992px) {
    .m-lg-0 {
        margin: 0 !important;
    }
    .mt-lg-0,
    .my-lg-0 {
        margin-top: 0 !important;
    }
    .mr-lg-0,
    .mx-lg-0 {
        margin-right: 0 !important;
    }
    .mb-lg-0,
    .my-lg-0 {
        margin-bottom: 0 !important;
    }
    .ml-lg-0,
    .mx-lg-0 {
        margin-left: 0 !important;
    }
    .m-lg-1 {
        margin: 0.25rem !important;
    }
    .mt-lg-1,
    .my-lg-1 {
        margin-top: 0.25rem !important;
    }
    .mr-lg-1,
    .mx-lg-1 {
        margin-right: 0.25rem !important;
    }
    .mb-lg-1,
    .my-lg-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-lg-1,
    .mx-lg-1 {
        margin-left: 0.25rem !important;
    }
    .m-lg-2 {
        margin: 0.5rem !important;
    }
    .mt-lg-2,
    .my-lg-2 {
        margin-top: 0.5rem !important;
    }
    .mr-lg-2,
    .mx-lg-2 {
        margin-right: 0.5rem !important;
    }
    .mb-lg-2,
    .my-lg-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-lg-2,
    .mx-lg-2 {
        margin-left: 0.5rem !important;
    }
    .m-lg-3 {
        margin: 1rem !important;
    }
    .mt-lg-3,
    .my-lg-3 {
        margin-top: 1rem !important;
    }
    .mr-lg-3,
    .mx-lg-3 {
        margin-right: 1rem !important;
    }
    .mb-lg-3,
    .my-lg-3 {
        margin-bottom: 1rem !important;
    }
    .ml-lg-3,
    .mx-lg-3 {
        margin-left: 1rem !important;
    }
    .m-lg-4 {
        margin: 2rem !important;
    }
    .mt-lg-4,
    .my-lg-4 {
        margin-top: 2rem !important;
    }
    .mr-lg-4,
    .mx-lg-4 {
        margin-right: 2rem !important;
    }
    .mb-lg-4,
    .my-lg-4 {
        margin-bottom: 2rem !important;
    }
    .ml-lg-4,
    .mx-lg-4 {
        margin-left: 2rem !important;
    }
    .m-lg-5 {
        margin: 5rem !important;
    }
    .mt-lg-5,
    .my-lg-5 {
        margin-top: 5rem !important;
    }
    .mr-lg-5,
    .mx-lg-5 {
        margin-right: 5rem !important;
    }
    .mb-lg-5,
    .my-lg-5 {
        margin-bottom: 5rem !important;
    }
    .ml-lg-5,
    .mx-lg-5 {
        margin-left: 5rem !important;
    }
    .m-lg-6 {
        margin: 6.25rem !important;
    }
    .mt-lg-6,
    .my-lg-6 {
        margin-top: 6.25rem !important;
    }
    .mr-lg-6,
    .mx-lg-6 {
        margin-right: 6.25rem !important;
    }
    .mb-lg-6,
    .my-lg-6 {
        margin-bottom: 6.25rem !important;
    }
    .ml-lg-6,
    .mx-lg-6 {
        margin-left: 6.25rem !important;
    }
    .m-lg-7 {
        margin: 7.25rem !important;
    }
    .mt-lg-7,
    .my-lg-7 {
        margin-top: 7.25rem !important;
    }
    .mr-lg-7,
    .mx-lg-7 {
        margin-right: 7.25rem !important;
    }
    .mb-lg-7,
    .my-lg-7 {
        margin-bottom: 7.25rem !important;
    }
    .ml-lg-7,
    .mx-lg-7 {
        margin-left: 7.25rem !important;
    }
    .p-lg-0 {
        padding: 0 !important;
    }
    .pt-lg-0,
    .py-lg-0 {
        padding-top: 0 !important;
    }
    .pr-lg-0,
    .px-lg-0 {
        padding-right: 0 !important;
    }
    .pb-lg-0,
    .py-lg-0 {
        padding-bottom: 0 !important;
    }
    .pl-lg-0,
    .px-lg-0 {
        padding-left: 0 !important;
    }
    .p-lg-1 {
        padding: 0.25rem !important;
    }
    .pt-lg-1,
    .py-lg-1 {
        padding-top: 0.25rem !important;
    }
    .pr-lg-1,
    .px-lg-1 {
        padding-right: 0.25rem !important;
    }
    .pb-lg-1,
    .py-lg-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-lg-1,
    .px-lg-1 {
        padding-left: 0.25rem !important;
    }
    .p-lg-2 {
        padding: 0.5rem !important;
    }
    .pt-lg-2,
    .py-lg-2 {
        padding-top: 0.5rem !important;
    }
    .pr-lg-2,
    .px-lg-2 {
        padding-right: 0.5rem !important;
    }
    .pb-lg-2,
    .py-lg-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-lg-2,
    .px-lg-2 {
        padding-left: 0.5rem !important;
    }
    .p-lg-3 {
        padding: 1rem !important;
    }
    .pt-lg-3,
    .py-lg-3 {
        padding-top: 1rem !important;
    }
    .pr-lg-3,
    .px-lg-3 {
        padding-right: 1rem !important;
    }
    .pb-lg-3,
    .py-lg-3 {
        padding-bottom: 1rem !important;
    }
    .pl-lg-3,
    .px-lg-3 {
        padding-left: 1rem !important;
    }
    .p-lg-4 {
        padding: 2rem !important;
    }
    .pt-lg-4,
    .py-lg-4 {
        padding-top: 2rem !important;
    }
    .pr-lg-4,
    .px-lg-4 {
        padding-right: 2rem !important;
    }
    .pb-lg-4,
    .py-lg-4 {
        padding-bottom: 2rem !important;
    }
    .pl-lg-4,
    .px-lg-4 {
        padding-left: 2rem !important;
    }
    .p-lg-5 {
        padding: 5rem !important;
    }
    .pt-lg-5,
    .py-lg-5 {
        padding-top: 5rem !important;
    }
    .pr-lg-5,
    .px-lg-5 {
        padding-right: 5rem !important;
    }
    .pb-lg-5,
    .py-lg-5 {
        padding-bottom: 5rem !important;
    }
    .pl-lg-5,
    .px-lg-5 {
        padding-left: 5rem !important;
    }
    .p-lg-6 {
        padding: 6.25rem !important;
    }
    .pt-lg-6,
    .py-lg-6 {
        padding-top: 6.25rem !important;
    }
    .pr-lg-6,
    .px-lg-6 {
        padding-right: 6.25rem !important;
    }
    .pb-lg-6,
    .py-lg-6 {
        padding-bottom: 6.25rem !important;
    }
    .pl-lg-6,
    .px-lg-6 {
        padding-left: 6.25rem !important;
    }
    .p-lg-7 {
        padding: 7.25rem !important;
    }
    .pt-lg-7,
    .py-lg-7 {
        padding-top: 7.25rem !important;
    }
    .pr-lg-7,
    .px-lg-7 {
        padding-right: 7.25rem !important;
    }
    .pb-lg-7,
    .py-lg-7 {
        padding-bottom: 7.25rem !important;
    }
    .pl-lg-7,
    .px-lg-7 {
        padding-left: 7.25rem !important;
    }
    .m-lg-auto {
        margin: auto !important;
    }
    .mt-lg-auto,
    .my-lg-auto {
        margin-top: auto !important;
    }
    .mr-lg-auto,
    .mx-lg-auto {
        margin-right: auto !important;
    }
    .mb-lg-auto,
    .my-lg-auto {
        margin-bottom: auto !important;
    }
    .ml-lg-auto,
    .mx-lg-auto {
        margin-left: auto !important;
    }
    }
    @media (min-width: 1200px) {
    .m-xl-0 {
        margin: 0 !important;
    }
    .mt-xl-0,
    .my-xl-0 {
        margin-top: 0 !important;
    }
    .mr-xl-0,
    .mx-xl-0 {
        margin-right: 0 !important;
    }
    .mb-xl-0,
    .my-xl-0 {
        margin-bottom: 0 !important;
    }
    .ml-xl-0,
    .mx-xl-0 {
        margin-left: 0 !important;
    }
    .m-xl-1 {
        margin: 0.25rem !important;
    }
    .mt-xl-1,
    .my-xl-1 {
        margin-top: 0.25rem !important;
    }
    .mr-xl-1,
    .mx-xl-1 {
        margin-right: 0.25rem !important;
    }
    .mb-xl-1,
    .my-xl-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-xl-1,
    .mx-xl-1 {
        margin-left: 0.25rem !important;
    }
    .m-xl-2 {
        margin: 0.5rem !important;
    }
    .mt-xl-2,
    .my-xl-2 {
        margin-top: 0.5rem !important;
    }
    .mr-xl-2,
    .mx-xl-2 {
        margin-right: 0.5rem !important;
    }
    .mb-xl-2,
    .my-xl-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-xl-2,
    .mx-xl-2 {
        margin-left: 0.5rem !important;
    }
    .m-xl-3 {
        margin: 1rem !important;
    }
    .mt-xl-3,
    .my-xl-3 {
        margin-top: 1rem !important;
    }
    .mr-xl-3,
    .mx-xl-3 {
        margin-right: 1rem !important;
    }
    .mb-xl-3,
    .my-xl-3 {
        margin-bottom: 1rem !important;
    }
    .ml-xl-3,
    .mx-xl-3 {
        margin-left: 1rem !important;
    }
    .m-xl-4 {
        margin: 2rem !important;
    }
    .mt-xl-4,
    .my-xl-4 {
        margin-top: 2rem !important;
    }
    .mr-xl-4,
    .mx-xl-4 {
        margin-right: 2rem !important;
    }
    .mb-xl-4,
    .my-xl-4 {
        margin-bottom: 2rem !important;
    }
    .ml-xl-4,
    .mx-xl-4 {
        margin-left: 2rem !important;
    }
    .m-xl-5 {
        margin: 5rem !important;
    }
    .mt-xl-5,
    .my-xl-5 {
        margin-top: 5rem !important;
    }
    .mr-xl-5,
    .mx-xl-5 {
        margin-right: 5rem !important;
    }
    .mb-xl-5,
    .my-xl-5 {
        margin-bottom: 5rem !important;
    }
    .ml-xl-5,
    .mx-xl-5 {
        margin-left: 5rem !important;
    }
    .m-xl-6 {
        margin: 6.25rem !important;
    }
    .mt-xl-6,
    .my-xl-6 {
        margin-top: 6.25rem !important;
    }
    .mr-xl-6,
    .mx-xl-6 {
        margin-right: 6.25rem !important;
    }
    .mb-xl-6,
    .my-xl-6 {
        margin-bottom: 6.25rem !important;
    }
    .ml-xl-6,
    .mx-xl-6 {
        margin-left: 6.25rem !important;
    }
    .m-xl-7 {
        margin: 7.25rem !important;
    }
    .mt-xl-7,
    .my-xl-7 {
        margin-top: 7.25rem !important;
    }
    .mr-xl-7,
    .mx-xl-7 {
        margin-right: 7.25rem !important;
    }
    .mb-xl-7,
    .my-xl-7 {
        margin-bottom: 7.25rem !important;
    }
    .ml-xl-7,
    .mx-xl-7 {
        margin-left: 7.25rem !important;
    }
    .p-xl-0 {
        padding: 0 !important;
    }
    .pt-xl-0,
    .py-xl-0 {
        padding-top: 0 !important;
    }
    .pr-xl-0,
    .px-xl-0 {
        padding-right: 0 !important;
    }
    .pb-xl-0,
    .py-xl-0 {
        padding-bottom: 0 !important;
    }
    .pl-xl-0,
    .px-xl-0 {
        padding-left: 0 !important;
    }
    .p-xl-1 {
        padding: 0.25rem !important;
    }
    .pt-xl-1,
    .py-xl-1 {
        padding-top: 0.25rem !important;
    }
    .pr-xl-1,
    .px-xl-1 {
        padding-right: 0.25rem !important;
    }
    .pb-xl-1,
    .py-xl-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-xl-1,
    .px-xl-1 {
        padding-left: 0.25rem !important;
    }
    .p-xl-2 {
        padding: 0.5rem !important;
    }
    .pt-xl-2,
    .py-xl-2 {
        padding-top: 0.5rem !important;
    }
    .pr-xl-2,
    .px-xl-2 {
        padding-right: 0.5rem !important;
    }
    .pb-xl-2,
    .py-xl-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-xl-2,
    .px-xl-2 {
        padding-left: 0.5rem !important;
    }
    .p-xl-3 {
        padding: 1rem !important;
    }
    .pt-xl-3,
    .py-xl-3 {
        padding-top: 1rem !important;
    }
    .pr-xl-3,
    .px-xl-3 {
        padding-right: 1rem !important;
    }
    .pb-xl-3,
    .py-xl-3 {
        padding-bottom: 1rem !important;
    }
    .pl-xl-3,
    .px-xl-3 {
        padding-left: 1rem !important;
    }
    .p-xl-4 {
        padding: 2rem !important;
    }
    .pt-xl-4,
    .py-xl-4 {
        padding-top: 2rem !important;
    }
    .pr-xl-4,
    .px-xl-4 {
        padding-right: 2rem !important;
    }
    .pb-xl-4,
    .py-xl-4 {
        padding-bottom: 2rem !important;
    }
    .pl-xl-4,
    .px-xl-4 {
        padding-left: 2rem !important;
    }
    .p-xl-5 {
        padding: 5rem !important;
    }
    .pt-xl-5,
    .py-xl-5 {
        padding-top: 5rem !important;
    }
    .pr-xl-5,
    .px-xl-5 {
        padding-right: 5rem !important;
    }
    .pb-xl-5,
    .py-xl-5 {
        padding-bottom: 5rem !important;
    }
    .pl-xl-5,
    .px-xl-5 {
        padding-left: 5rem !important;
    }
    .p-xl-6 {
        padding: 6.25rem !important;
    }
    .pt-xl-6,
    .py-xl-6 {
        padding-top: 6.25rem !important;
    }
    .pr-xl-6,
    .px-xl-6 {
        padding-right: 6.25rem !important;
    }
    .pb-xl-6,
    .py-xl-6 {
        padding-bottom: 6.25rem !important;
    }
    .pl-xl-6,
    .px-xl-6 {
        padding-left: 6.25rem !important;
    }
    .p-xl-7 {
        padding: 7.25rem !important;
    }
    .pt-xl-7,
    .py-xl-7 {
        padding-top: 7.25rem !important;
    }
    .pr-xl-7,
    .px-xl-7 {
        padding-right: 7.25rem !important;
    }
    .pb-xl-7,
    .py-xl-7 {
        padding-bottom: 7.25rem !important;
    }
    .pl-xl-7,
    .px-xl-7 {
        padding-left: 7.25rem !important;
    }
    .m-xl-auto {
        margin: auto !important;
    }
    .mt-xl-auto,
    .my-xl-auto {
        margin-top: auto !important;
    }
    .mr-xl-auto,
    .mx-xl-auto {
        margin-right: auto !important;
    }
    .mb-xl-auto,
    .my-xl-auto {
        margin-bottom: auto !important;
    }
    .ml-xl-auto,
    .mx-xl-auto {
        margin-left: auto !important;
    }
    }
    .text-justify {
    text-align: justify !important;
    }
    .text-nowrap {
    white-space: nowrap !important;
    }
    .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .text-left {
    text-align: left !important;
    }
    .text-right {
    text-align: right !important;
    }
    .text-center {
    text-align: center !important;
    }
    @media (min-width: 576px) {
    .text-sm-left {
        text-align: left !important;
    }
    .text-sm-right {
        text-align: right !important;
    }
    .text-sm-center {
        text-align: center !important;
    }
    }
    @media (min-width: 768px) {
    .text-md-left {
        text-align: left !important;
    }
    .text-md-right {
        text-align: right !important;
    }
    .text-md-center {
        text-align: center !important;
    }
    }
    @media (min-width: 992px) {
    .text-lg-left {
        text-align: left !important;
    }
    .text-lg-right {
        text-align: right !important;
    }
    .text-lg-center {
        text-align: center !important;
    }
    }
    @media (min-width: 1200px) {
    .text-xl-left {
        text-align: left !important;
    }
    .text-xl-right {
        text-align: right !important;
    }
    .text-xl-center {
        text-align: center !important;
    }
    }
    .text-lowercase {
    text-transform: lowercase !important;
    }
    .text-uppercase {
    text-transform: uppercase !important;
    }
    .text-capitalize {
    text-transform: capitalize !important;
    }
    .font-weight-light {
    font-weight: 300 !important;
    }
    .font-weight-normal {
    font-weight: 400 !important;
    }
    .font-weight-bold {
    font-weight: 700 !important;
    }
    .font-italic {
    font-style: italic !important;
    }
    .text-white {
    color: #fff !important;
    }
    .text-primary {
    color: #007bff !important;
    }
    a.text-primary:focus,
    a.text-primary:hover {
    color: #0062cc !important;
    }
    .text-secondary {
    color: #6c757d !important;
    }
    a.text-secondary:focus,
    a.text-secondary:hover {
    color: #545b62 !important;
    }
    .text-success {
    color: #28a745 !important;
    }
    a.text-success:focus,
    a.text-success:hover {
    color: #1e7e34 !important;
    }
    .text-info {
    color: #17a2b8 !important;
    }
    a.text-info:focus,
    a.text-info:hover {
    color: #117a8b !important;
    }
    .text-warning {
    color: #ffc107 !important;
    }
    a.text-warning:focus,
    a.text-warning:hover {
    color: #d39e00 !important;
    }
    .text-danger {
    color: #dc3545 !important;
    }
    a.text-danger:focus,
    a.text-danger:hover {
    color: #bd2130 !important;
    }
    .text-light {
    color: #f8f9fa !important;
    }
    a.text-light:focus,
    a.text-light:hover {
    color: #dae0e5 !important;
    }
    .text-dark {
    color: #343a40 !important;
    }
    a.text-dark:focus,
    a.text-dark:hover {
    color: #1d2124 !important;
    }
    .text-muted {
    color: #6c757d !important;
    }
    .text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
    }
    @-ms-viewport {
    width: device-width;
    }
    .page,
    html {
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    color: #344554;
    background-color: #fff;
    background: linear-gradient(180deg, #fff 0, #fff 70%, #f9fbfc);
    overflow-x: hidden;
    }
    .page.mobileDevice,
    html.mobileDevice {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    }
    .page.is-overflow,
    html.is-overflow {
    position: fixed;
    left: 0;
    right: 0;
    overflow: hidden;
    }
    html.mobileos-ios {
    -webkit-overflow-scrolling: touch;
    }
    a {
    text-decoration: underline;
    color: inherit;
    font-weight: 400;
    }
    a:hover {
    text-decoration: none;
    color: #fff;
    }
    .js-fadeInUp {
    animation: 1s ease 0s normal forwards 1 js-fadeInUp;
    }
    .circle {
    position: relative;
    }
    .circle:before {
    position: absolute;
    top: -300px;
    left: -650px;
    right: 0;
    bottom: 0;
    width: 1000px;
    height: 1000px;
    background: url(${ModalImage}) no-repeat;
    background-size: contain;
    background-position: 100%;
    }
    .circle.green:before {
    background: url(${CircleImage}) no-repeat;
    background-size: contain;
    background-position: 50%;
    width: 900px;
    height: 900px;
    top: -80px;
    left: -400px;
    }
    .circle.invert:before {
    right: -650px;
    left: auto;
    }
    @media screen and (min-width: 1738px) {
    .circle.invert:before {
        right: -450px;
        top: 30px;
    }
    }
    .circle.invert.green:before {
    /* background: url(/build/images/bg-right.d09a4847.svg) no-repeat; */
    }
    .circle.invert.green.half:before {
    /* background: url(/build/images/green-half.29a5cc80.svg) no-repeat; */
    width: 940px;
    height: 885px;
    right: -480px;
    top: -107px;
    }
    .circle.grey.small:before {
    /* background: url(/build/images/circle-small-grey.b810dac4.svg) no-repeat; */
    top: -230px;
    left: 0;
    }
    @media (min-width: 768px) {
    .circle:before {
        content: "";
    }
    }
    @media (min-width: 992px) {
    .animated,
    .js-text-animation {
        opacity: 0;
    }
    }
    @keyframes js-fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 15%, 0);
    }
    to {
        opacity: 1;
        transform: none;
    }
    }
    :target:before {
    content: "";
    display: block;
    height: 85px;
    margin: -85px 0 0;
    }
    button {
    border: none;
    }
    .button {
    display: inline-block;
    min-width: 274px;
    padding: 19px 25px;
    line-height: 1.375em;
    color: #fff;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .button.is-disabled {
    cursor: not-allowed;
    }
    .button:active,
    .button:focus,
    .button:hover {
    outline: none;
    }
    .button:focus {
    color: #fff;
    }
    .button--small {
    padding: 13px 24px;
    min-width: 116px;
    font-size: 14px;
    line-height: 1.2em;
    }
    .button--fluid {
    min-width: 0;
    }
    .button--icon {
    position: relative;
    padding-left: 50px;
    }
    .button--icon svg {
    position: absolute;
    display: block;
    left: 20px;
    top: 50%;
    margin-right: 12px;
    transform: translateY(-50%);
    transition: all 0.25s ease;
    }
    .button--primary {
    background-color: #1f2759;
    box-shadow: 0 4px 8px 0 rgba(18, 196, 139, 0.32);
    }
    .button--primary.is-disabled {
    background-color: #85f4d0;
    }
    .button--outline-primary {
    background-color: #fff;
    color: #1f2759;
    border: 1px solid #1f2759;
    box-shadow: none;
    }
    .button--outline-primary.is-disabled {
    color: #c6ced6;
    border-color: #c6ced6;
    }
    .button--outline-primary:focus,
    .button--outline-primary:hover {
    color: #1f2759;
    }
    .slider__next,
    .slider__prev {
    display: none;
    position: absolute;
    top: 13px;
    right: 15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 0;
    border: 1px solid #1f2759;
    cursor: pointer;
    transition: background-color 0.2s ease;
    }
    .slider__next:before,
    .slider__prev:before {
    position: relative;
    width: 10px;
    height: 10px;
    content: "";
    border-bottom: 1px solid #1f2759;
    border-left: 1px solid #1f2759;
    display: block;
    }
    .slider__next:hover,
    .slider__prev:hover {
    background-color: #1f2759;
    }
    .slider__next:hover:before,
    .slider__prev:hover:before {
    border-color: #fff;
    }
    @media (min-width: 992px) {
    .slider__arrows-wrapper {
        display: none;
    }
    }
    .slider__prev {
    right: 85px;
    }
    .slider__prev:before {
    top: 18px;
    left: 18px;
    transform: rotate(45deg);
    }
    .slider__next:before {
    top: 18px;
    left: 18px;
    transform: rotate(-135deg);
    }
    @media (min-width: 992px) {
    .button:hover {
        text-decoration: none;
        color: #fff;
    }
    .button--primary:hover:not(.is-disabled) {
        background-color: #11bb85;
        box-shadow: 0 6px 10px 0 rgba(18, 196, 139, 0.64);
    }
    .button--primary:active:not(.is-disabled),
    .button--primary:focus:not(.is-disabled) {
        background-color: #10b480;
        box-shadow: 0 4px 8px 0 rgba(18, 196, 139, 0.16);
    }
    .button--outline-primary.is-disabled:focus {
        background-color: #fff;
        color: #c6ced6;
    }
    .button--outline-primary:hover:not(.is-disabled) {
        color: #fff;
        background-color: #1f2759;
        box-shadow: 0 6px 10px 0 rgba(31, 39, 89, 0.64);
    }
    .button--outline-primary:hover:not(.is-disabled) svg path {
        fill: #fff;
    }
    .button--outline-primary:focus {
        background-color: #1f2759;
        color: #fff;
    }
    }
    .color-red {
    color: #ff5154 !important;
    }
    .form-group {
    z-index: 100;
    }
    .form-control,
    .form-group {
    position: relative;
    }
    .form-control--search button {
    background-color: transparent;
    position: absolute;
    top: -2px;
    left: -5px;
    width: 60px;
    height: 100%;
    border: none;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    box-shadow: none;
    outline: none;
    font-size: 20px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    }
    .form-control--search button:active,
    .form-control--search button:focus {
    outline: none;
    }
    .form-control--search button:before {
    cursor: pointer;
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 2px);
    color: #6c767f;
    transform-origin: 50% 50%;
    transition: transform 0.2s ease;
    }
    .form-control--search .form-control__input {
    padding-left: 60px;
    }
    .form-control--search .form-control__input::-ms-input-placeholder {
    color: #6c767f;
    }
    .form-control--search .form-control__input::placeholder {
    color: #6c767f;
    }
    .form-control label {
    font-size: 12px;
    font-weight: 600;
    color: #6c767f;
    margin-left: 20px;
    }
    .form-control:after {
    position: absolute;
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease;
    }
    .form-control--invalid .form-control__input {
    color: #fb6666;
    }
    .form-control--invalid:after {
    position: absolute;
    top: 50%;
    right: 20px;
    content: "";
    transform: translateY(-50%);
    /* background: url(/build/images/is-invalid.15782726.svg) no-repeat; */
    width: 32px;
    height: 32px;
    opacity: 1;
    }
    .form-control--invalid + .valid-feedback {
    display: block;
    opacity: 1;
    visibility: visible;
    color: #fb6666;
    }
    .form-control__input {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 10px 24px 0 hsla(210, 8%, 54%, 0.16);
    border: 1px solid transparent;
    padding: 17px 20px;
    font-size: 16px;
    font-weight: 600;
    color: #6c767f;
    transition: box-shadow 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }
    .form-control__input:active,
    .form-control__input:focus,
    .form-control__input:hover {
    outline: none;
    }
    .form-control__input:focus {
    box-shadow: 0 10px 24px 0 hsla(210, 8%, 54%, 0.3);
    }
    .form-control__input::-ms-input-placeholder {
    color: #c6ced6;
    }
    .form-control__input::placeholder {
    color: #c6ced6;
    }
    .form-control__input:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    content: "";
    }
    .form-control__input-wrapper {
    position: relative;
    cursor: pointer;
    }
    .form-control__input-wrapper:before {
    position: absolute;
    content: "";
    top: calc(50% - 10px);
    right: 27px;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    border-bottom: 2.5px solid #6c767f;
    border-right: 2.5px solid #6c767f;
    transition: border-color 0.2s ease, transform 0.2s ease;
    }
    .form-control__input-wrapper input:hover {
    cursor: pointer;
    }
    .form-control__input-wrapper.is-opened:before {
    top: calc(50% - 5px);
    transform: rotate(225deg);
    border-color: #0f406b;
    }
    .form-control__input-wrapper.is-opened + .dropdown__options {
    display: block;
    position: absolute;
    max-height: 280px;
    overflow-y: scroll;
    z-index: 8000;
    }
    .form-control__textarea {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 10px 24px 0 hsla(210, 8%, 54%, 0.16);
    border: 1px solid transparent;
    padding: 17px 20px;
    font-size: 16px;
    font-weight: 600;
    color: #6c767f;
    resize: none;
    min-height: 214px;
    transition: box-shadow 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }
    .form-control__textarea:focus {
    box-shadow: 0 10px 24px 0 hsla(210, 8%, 54%, 0.3);
    }
    .form-control__textarea:active,
    .form-control__textarea:focus,
    .form-control__textarea:hover {
    outline: none;
    }
    .form-control__textarea::-ms-input-placeholder {
    color: #c6ced6;
    }
    .form-control__textarea::placeholder {
    color: #c6ced6;
    }
    .form-control .dropdown__options {
    display: none;
    }
    .form-check__input {
    position: absolute;
    z-index: -1;
    overflow: visible;
    opacity: 0;
    }
    .form-check__input:checked ~ .form-check__label:before {
    background-color: #2b71ad;
    }
    .form-check__input:checked ~ .form-check__label:after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    }
    .form-check__label {
    position: relative;
    font-weight: 400;
    font-size: 14px;
    font-size: 0.875rem;
    line-height: 24px;
    line-height: 1.5rem;
    color: #6c767f;
    padding-left: 26px;
    cursor: pointer;
    margin: 0;
    }
    .form-check__label,
    .form-check__label:before {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }
    .form-check__label:before {
    pointer-events: none;
    background-color: #e4e9ee;
    border-radius: 5px;
    }
    .form-check__label:after,
    .form-check__label:before {
    position: absolute;
    top: 6px;
    left: 0;
    display: block;
    width: 18px;
    height: 18px;
    content: "";
    }
    .form-check__label:after {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 50% 50%;
    }
    .form-check__label a {
    color: inherit;
    font-weight: inherit;
    text-decoration: underline;
    }
    .form-check__label a:hover {
    text-decoration: none;
    }
    @media (min-width: 768px) {
    .form-check__label:after,
    .form-check__label:before {
        top: 2.5px;
    }
    }
    .dropdown__options,
    .search__message,
    .search__whisper {
    position: relative;
    box-shadow: 0 10px 24px 0 hsla(210, 8%, 54%, 0.16);
    border-radius: 20px;
    padding: 20px;
    background-color: #fff;
    margin-top: 10px;
    }
    .dropdown__options {
    padding-left: 0;
    padding-right: 0;
    }
    .dropdown__options-item {
    padding: 10px 20px;
    transition: background-color 0.2s ease-in-out;
    }
    .dropdown__options-item:hover {
    cursor: pointer;
    background-color: #f1f6fb;
    }
    .search__whisper img {
    margin-right: 14px;
    max-width: 24px;
    max-height: 24px;
    }
    .search__whisper-item {
    display: block;
    margin-bottom: 18px;
    }
    .search__whisper-item:hover {
    cursor: pointer;
    }
    .valid-feedback {
    display: none;
    visibility: hidden;
    opacity: 1;
    width: 100%;
    font-size: 16px;
    margin-top: 8px;
    text-align: right;
    transition: opacity 0.2s ease;
    }
    @media (min-width: 992px) {
    .valid-feedback {
        position: absolute;
        top: 100%;
    }
    }
    h1,
    h2,
    h3,
    h4 {
    font-weight: 300;
    margin-bottom: 0;
    }
    h1 {
    font-size: 38px;
    font-size: 2.375rem;
    line-height: 55px;
    line-height: 3.4375rem;
    }
    h2 {
    font-size: 32px;
    font-size: 2rem;
    line-height: 43px;
    line-height: 2.6875rem;
    }
    h3 {
    font-size: 26px;
    }
    h4 {
    font-size: 20px;
    }
    b {
    font-weight: 700;
    }
    p {
    font-size: 16px;
    font-size: 1rem;
    line-height: 22px;
    line-height: 1.375rem;
    }
    @media (min-width: 768px) {
    h1 {
        font-size: 50px;
        font-size: 3.125rem;
        line-height: 72px;
        line-height: 4.5rem;
    }
    h2 {
        font-size: 38px;
        font-size: 2.375rem;
        line-height: 55px;
        line-height: 3.4375rem;
    }
    h3 {
        font-size: 32px;
    }
    }
    .icon--blue {
    color: #40c3f9;
    text-shadow: 0 4px 8px rgba(64, 195, 249, 0.24);
    }
    .icon--pink {
    color: #ff6faf;
    text-shadow: 0 4px 8px rgba(255, 111, 175, 0.24);
    }
    .icon--brown {
    color: #c29165;
    text-shadow: 0 4px 8px hsla(28, 43%, 58%, 0.24);
    }
    .icon--yellow {
    color: #ffb838;
    text-shadow: 0 4px 8px rgba(255, 184, 56, 0.24);
    }
    .icon--red {
    color: #fe5a61;
    text-shadow: 0 4px 8px rgba(254, 90, 97, 0.24);
    }
    .icon--green {
    color: #2b71ad;
    text-shadow: 0 4px 8px rgba(0, 188, 124, 0.24);
    }
    @font-face {
    font-family: spendee;
    /* src: url(/build/fonts/spendee.c8b5b832.eot);
    src: url(/build/fonts/spendee.c8b5b832.eot) format("embedded-opentype"),
        url(/build/fonts/spendee.ad521a96.ttf) format("truetype"),
        url(/build/fonts/spendee.3ab5d96a.woff) format("woff"),
        url(/build/images/spendee.e7cadabc.svg) format("svg"); */
    font-weight: 400;
    font-style: normal;
    }
    [class*=" icon-"],
    [class^="icon-"] {
    font-family: spendee !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    .icon-free:before {
    content: "\E920";
    }
    .icon-people:before {
    content: "\E921";
    }
    .icon-cycle-arrows:before {
    content: "\E91F";
    }
    .icon-victory:before {
    content: "\E900";
    }
    .icon-connection:before {
    content: "\E901";
    }
    .icon-storage:before {
    content: "\E902";
    }
    .icon-person-shield:before {
    content: "\E903";
    }
    .icon-creditcard:before {
    content: "\E904";
    }
    .icon-twiter:before {
    content: "\E905";
    }
    .icon-linkedin:before {
    content: "\E906";
    }
    .icon-facebook:before {
    content: "\E907";
    }
    .icon-email:before {
    content: "\E908";
    }
    .icon-shield:before {
    content: "\E909";
    }
    .icon-bell:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${AlertImage});
    }
    .icon-person:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${PersonImage});
    }
    .icon-currency:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${CurrencyImage});
    }
    .icon-wallet:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${WalletImage});
    }  
    .icon-cloud:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${CloudImage});
    }
    .icon-bank:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${Bank});
    }
    .icon-knife:before  {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${KnifeImage});
    }
    .icon-lightening:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${LighteningImage});
    }
    .icon-bar-chart:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${BarImage});
    }
    .icon-airplane:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${AirplaneImage});
    }
    .icon-dashboard:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${DashboardImage});
    }
    .icon-pie-chart:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${PiechartImage});
    }
    .icon-search:before {
    content: "\E918";
    }
    .icon-instagram:before {
    content: "\E919";
    }
    .icon-twitter:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${TwitterImage});
    }
    .icon-facebook2:before {
    content: "\E91A";
    }
    .icon-apple:before {
    content: "\E91B";
    }
    .icon-lauren:before {
    content: "\E91C";
    }
    .icon-star:before {
    content: "\E91D";
    }
    .icon-arrow-up:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${UpImage});
    }
    .icon-arrow-down:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    transform: rotate(180deg);
    background-size: cover;
    background-image: url(${DownImage});
    }
    .icon-cash:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(${CashImage});
    }
    .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    transition: background-color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
        border 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .header .hamburger {
    width: 20px;
    height: 13px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    margin-left: auto;
    }
    .header .hamburger span {
    display: block;
    position: absolute;
    height: 2px;
    width: 50%;
    background: #2b71ad;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    }
    .header .hamburger span:nth-child(2n) {
    left: 50%;
    border-radius: 0 9px 9px 0;
    }
    .header .hamburger span:nth-child(odd) {
    left: 0;
    border-radius: 9px 0 0 9px;
    }
    .header .hamburger span:first-child,
    .header .hamburger span:nth-child(2) {
    top: 0;
    }
    .header .hamburger span:nth-child(3),
    .header .hamburger span:nth-child(4) {
    top: 5px;
    }
    .header .hamburger span:nth-child(5),
    .header .hamburger span:nth-child(6) {
    top: 10px;
    }
    .header.is-open .hamburger span:first-child,
    .header.is-open .hamburger span:nth-child(6) {
    transform: rotate(45deg);
    }
    .header.is-open .hamburger span:nth-child(2),
    .header.is-open .hamburger span:nth-child(5) {
    transform: rotate(-45deg);
    }
    .header.is-open .hamburger span:first-child {
    left: 5px;
    top: 5px;
    width: 13px;
    }
    .header.is-open .hamburger span:nth-child(2) {
    left: calc(50% - 5px);
    top: 5px;
    width: 13px;
    }
    .header.is-open .hamburger span:nth-child(3) {
    left: -50%;
    opacity: 0;
    }
    .header.is-open .hamburger span:nth-child(4) {
    left: 100%;
    opacity: 0;
    }
    .header.is-open .hamburger span:nth-child(5) {
    left: 5px;
    top: 29px;
    }
    .header.is-open .hamburger span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
    }
    .header [class^="col-"] {
    position: static;
    }
    .header__wrapper {
    position: relative;
    padding: 18px 0;
    }
    .header__logo {
    display: -ms-flexbox;
    display: flex;
    }
    .header__inner,
    .header__logo {
    -ms-flex-align: center;
    align-items: center;
    }
    .header__navigation {
    display: none;
    position: absolute;
    top: 100%;
    left: -1px;
    right: -1px;
    bottom: 0;
    background-color: rgba(52, 69, 84, 0.6);
    z-index: 1000;
    overflow: auto;
    opacity: 0;
    }
    .header__navigation-wrapper {
    position: relative;
    }
    .header__navigation nav {
    display: none;
    overflow: hidden;
    }
    .header__navigation-main li {
    position: relative;
    opacity: 0;
    transform: translateY(10px);
    }
    .header__navigation ul {
    background-color: #fff;
    margin: 0;
    padding: 0;
    text-align: right;
    }
    .header__navigation ul:not(.header__mobile-cta) {
    padding-bottom: 70px;
    }
    .header__navigation ul:not(.header__mobile-cta) li {
    display: block;
    text-align: center;
    }
    .header__navigation ul:not(.header__mobile-cta) li:nth-last-child(-n + 2) {
    display: none;
    }
    .header__navigation li {
    list-style: none;
    display: inline-block;
    padding: 3px 18px;
    }
    .header__navigation li:last-child {
    padding-right: 0;
    }
    .header__navigation a:not(.button) {
    display: inline-block;
    padding: 13px;
    text-decoration: none;
    text-align: center;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: #6c767f;
    font-size: 14px;
    }
    html.non-mobileDevice .header__navigation a:not(.button):hover {
    color: #344554;
    }
    html.non-mobileDevice .header__navigation a:not(.button):hover:after {
    opacity: 1;
    transform: translateY(0);
    }
    .header__navigation a:not(.button):after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(52, 69, 84, 0.3);
    content: "";
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateY(10px);
    }
    .header__navigation a:not(.button).active {
    color: #344554;
    }
    .header__navigation.shadow {
    background-color: #fff;
    }
    .header__navigation.shadow .header__mobile-cta {
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -10px 27px hsla(210, 8%, 54%, 0.17);
    text-align: center;
    }
    .header__navigation.shadow .header__navigation-main {
    height: 100%;
    overflow: scroll;
    padding-bottom: 70px;
    }
    .header__navigation-main{
        backgroung-color: #4d84e2;
    }
    .header__menu a {
    text-decoration: none;
    }
    .header__menu a.active {
    color: #2b71ad;
    }
    .header__menu a:not(.button__menu) {
    display: none;
    }
    .header__menu a:not(.button) {
    color: #6c767f;
    padding: 8px 24px;
    }
    .header__menu a:not(.button):hover {
    color: #344554;
    }
    .header__menu .button__menu {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    margin-left: 8px;
    padding-left: 24px;
    padding-right: 20px;
    }
    .header__menu .button__menu > span {
    margin-right: 5px;
    }
    .header__mobile-cta {
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .header__mobile-cta ul{
        background-color: #5995fd;
    }
    .header__mobile-cta .button {
    display: inline-block;
    }
    .header__mobile-cta li {
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    padding: 10px 8px;
    }

    .header__mobile-cta li:last-of-type {
    text-align: left;
    }
    .header.is-open {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    }
    .header.is-open .button__menu {
    height: 44px;
    }
    .header--fixed {
    position: fixed;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e4e9ee;
    }
    .header--fixed,
    .header--hidden {
    transition: transform 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955),
        border 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955),
        background-color 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .header--hidden {
    transform: translateY(-100%);
    }
    @media (min-width: 768px) {
    .header .header__menu a {
        display: -ms-inline-flexbox;
        display: inline-flex;
    }
    .header__navigation ul:not(.header__mobile-cta) {
        padding: 0;
    }
    .header__navigation ul:not(.header__mobile-cta) li:nth-last-child(-n + 2) {
        display: none;
    }
    .header__navigation .link-hr {
        position: relative;
    }
    .header__navigation .link-hr:before {
        position: absolute;
        top: 50%;
        left: 0;
        bottom: 0;
        width: 1px;
        height: calc(100% - 6px);
        background-color: #6c767f;
        content: "";
        transform: translateY(-50%);
    }
    .header__mobile-cta {
        display: none;
    }
    }
    @media (min-width: 992px) {
    .header__navigation {
        display: block;
        position: static;
        background: none;
        overflow: visible;
        opacity: 1;
    }
    .header__navigation nav {
        display: block;
        overflow: visible;
        height: auto;
    }
    .header__navigation-main li {
        position: relative;
        opacity: 1;
        transform: translateY(0);
    }
    .header__navigation ul {
        background: none;
    }
    .header__navigation ul:not(.header__mobile-cta) li {
        display: inline-block;
        padding: 3px 18px;
    }
    .header__navigation ul:not(.header__mobile-cta) li:nth-last-child(-n + 2) {
        display: inline-block;
    }
    .header__navigation ul:not(.header__mobile-cta) li a:not(.button) {
        padding: 0;
    }
    .header__menu,
    .header__mobile-cta {
        display: none;
    }
    }
    .visual {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    margin-top: 150px;
    }
    .visual--fluid {
    height: auto;
    min-height: 0;
    margin-top: 86px;
    }
    .visual__shape {
    display: none;
    position: absolute;
    top: 0;
    left: 74%;
    }
    .visual .container,
    .visual .row {
    height: 100%;
    }
    .visual .row {
    -ms-flex-align: center;
    align-items: center;
    }
    .visual__main {
    text-align: center;
    margin-bottom: 47px;
    }
    .visual__main .button {
    display: none;
    margin-top: 34px;
    margin-bottom: 48px;
    }
    .visual__main .store {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    max-width: none;
    }
    .visual__main .store__button--apple {
    margin-right: 8px;
    }
    .visual__image {
    display: block;
    background-image: none;
    background-size: contain;
    background-repeat: no-repeat;
    }
    .visual__image--samsung {
    position: absolute;
    background-image: url(${SamsungImage});
    width: 226px;
    height: 481px;
    z-index: 2;
    left: -80px;
    }
    .visual__image--iphone {
    position: relative;
    margin: 0 auto;
    width: 264px;
    height: 529px;
    background-image: url(${iPhoneImage});
    z-index: 3;
    }
    .visual__image--desktop {
    position: absolute;
    background-image: url(${MacImage});
    width: 861px;
    height: 485px;
    z-index: 1;
    left: 40%;
    }
    .visual__mobile-image {
    background: url(${MobileImage}) no-repeat;
    background-size: contain;
    width: calc(100% + 14px);
    margin: 16px 0 13px;
    }
    .visual__mobile-image:before {
    display: block;
    content: "";
    padding-bottom: 53.76045%;
    }
    .visual__wrapper {
    text-align: center;
    display: none;
    -ms-flex-align: center;
    align-items: center;
    }
    .visual__image--relative,
    .visual__wrapper {
    position: relative;
    }
    @media (min-width: 768px) {
    .visual__shape {
        display: block;
        top: -100px;
    }
    .visual .container {
        padding-top: 110px;
    }
    .visual .row {
        -ms-flex-align: unset;
        align-items: unset;
    }
    .visual__mobile-image {
        display: none;
    }
    .visual__main {
        text-align: left;
        margin-bottom: 63px;
    }
    .visual .button {
        display: inline-block;
    }
    .visual .store {
        -ms-flex-pack: start;
        justify-content: flex-start;
    }
    .visual__wrapper {
        display: block;
        transform: scale(0.7);
    }
    }
    @media (min-width: 992px) {
    .visual__wrapper {
        display: -ms-flexbox;
        display: flex;
        transform: scale(1);
    }
    .visual__bg--tablet {
        display: none;
    }
    .visual--fluid {
        height: auto;
        min-height: 0;
        margin-top: 86px;
    }
    .visual__main {
        text-align: left;
    }
    .visual__main .button {
        display: inline-block;
    }
    .visual__image {
        display: block;
        background-image: none;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .visual__image--samsung {
        position: absolute;
        background-image: url(${SamsungImage});
        width: 226px;
        height: 481px;
        z-index: 2;
        left: 6.5%;
    }
    .visual__image--iphone {
        position: relative;
        margin: 0 auto;
        width: 264px;
        height: 529px;
        background-image: url(${iPhoneImage});
        z-index: 3;
    }
    .visual__image--desktop {
        position: absolute;
        background-image: url(${MacImage});
        width: 861px;
        height: 485px;
        z-index: 1;
        left: 40%;
    }
    .visual__image--relative {
        position: relative;
    }
    .visual__mobile-image {
        display: none;
    }
    }
    .wsw .circle:before {
    z-index: 1;
    }
    .wsw__subheading {
    color: #6c767f;
    }
    .wsw .wsw__heading {
    z-index: 1000;
    position: relative;
    }
    .wsw .wsw__heading + p {
    margin-top: 30px;
    }
    .wsw-card {
    z-index: 9;
    }
    .wsw-card,
    .wsw p {
    position: relative;
    }
    .wsw p {
    color: #6c767f;
    line-height: 2em;
    margin-bottom: 0;
    z-index: 1000;
    }
    .wsw p + p {
    margin-top: 24px;
    }
    .wsw p a {
    color: inherit;
    text-decoration: underline;
    }
    .wsw p a:hover {
    text-decoration: none;
    }
    .wsw hr {
    border: 0.5px solid #e4e9ee;
    margin: 0;
    position: relative;
    z-index: 9;
    }
    .wsw h2 {
    font-size: 26px;
    font-size: 1.625rem;
    line-height: 36px;
    line-height: 2.25rem;
    }
    @media (min-width: 992px) {
    .wsw hr {
        margin: 90px 0;
    }
    .wsw .wsw__heading {
        margin-bottom: 20px;
    }
    .wsw .circle:before {
        right: -1000px;
    }
    }
    @media (max-width: 991.98px) {
    .wsw > .container .row + .row {
        margin-top: 50px;
    }
    .wsw br {
        display: none;
    }
    }
    @media (max-width: 991.98px) {
    .page--wsw .visual__title,
    .wsw-card p,
    .wsw h2,
    .wsw h3,
    .wsw h4,
    .wsw h5,
    .wsw h6 {
        text-align: center;
    }
    }
    .footer {
    border-top: 1px solid #e4e9ee;
    color: #6c767f;
    padding: 50px 0;
    margin-top: 50px;
    }
    .footer__wrapper {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-direction: column;
    flex-direction: column;
    }
    .footer__links {
    padding-left: 30px;
    }
    .footer__links-wrapper {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    }
    .footer__links-wrapper .footer__links {
    padding: 0;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    }
    .footer__links-wrapper .footer__links:nth-of-type(2) {
    padding-left: 30px;
    }
    .footer__links li {
    list-style: none;
    }
    .footer__links a {
    color: inherit;
    font-weight: 400;
    text-decoration: underline;
    line-height: 2.5em;
    }
    .footer__links a:hover {
    text-decoration: none;
    }
    .footer .store {
    margin-top: 10px;
    margin-bottom: 15px;
    }
    .footer__copy {
    margin-top: 7px;
    }
    .footer__copy small {
    font-size: 12px;
    font-size: 0.75rem;
    line-height: 20px;
    line-height: 1.25rem;
    }
    @media (min-width: 768px) {
    .footer__wrapper {
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .footer .store {
        max-width: 100%;
        width: 100%;
        text-align: center;
    }
    }
    @media (min-width: 992px) {
    .footer__wrapper {
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .footer__links-wrapper {
        width: auto;
    }
    .footer__links-wrapper:first-of-type .footer__links:first-of-type {
        padding-left: 0;
    }
    .footer__links-wrapper .footer__links {
        -ms-flex: none;
        flex: none;
        padding-left: 60px;
    }
    .footer .store {
        text-align: left;
    }
    .footer small {
        display: block;
        max-width: 1061px;
        margin: 0 auto;
    }
    }
    .store {
    padding: 0;
    max-width: 301px;
    }
    .store,
    .store__button {
    text-align: left;
    display: inline-block;
    }
    .store__button {
    width: 143px;
    height: 42px;
    }
    .store__button--apple {
    margin-right: 10px;
    }
    .store__button--apple #hover {
    transition: fillOpacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .store__button--apple:hover #hover {
    fillOpacity: 1;
    }
    .store__button--google #hover {
    transition: fillOpacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .store__button--google:hover #hover {
    fillOpacity: 1;
    }
    .store__button--website #hover {
    transition: fillOpacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .store__button--website:hover #hover {
    fillOpacity: 1;
    }
    .store-social {
    margin-top: 30px;
    width: 100%;
    }
    .store-social__button {
    display: inline-block;
    width: 38px;
    height: 38px;
    background-size: cover;
    text-indent: -9999px;
    text-align: left;
    }
    .store-social__button--facebook {
    background-image: url(${FacebookImage});
    }
    .store-social__button--twitter {
    background-image: url(${TwitterImage});
    }
    .store-social__button--instagram {
    background-image:url(${InstagramImage});
    }
    @media (max-width: 767.98px) {
    .store {
        text-align: left;
    }
    .store__button--apple {
        margin: 0;
    }
    .store-social.store-social {
        text-align: center;
    }
    }
    @media (max-width: 350px) {
    .store {
        text-align: center;
    }
    }
    .progress-bar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    min-height: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #ecf9fe;
    }
    .progress-bar .fill {
    border-radius: 16px;
    height: 100%;
    }
    .progress-bar .fill--red {
    background-color: #ff5154;
    }
    .progress-bar .fill--pink {
    background-color: #f963a0;
    }
    .progress-bar .fill--orange {
    background-color: #ffbf53;
    }
    .progress-bar span {
    position: absolute;
    top: 2px;
    left: 0;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    padding: 6px 10px;
    }
    .why {
    margin-top: 54px;
    margin-bottom: 8px;
    }
    .why__slider-wrapper {
    overflow: hidden;
    padding: 40px 0;
    }
    .why__slider-card {
    max-width: 337px;
    margin: 0 auto;
    padding: 35px 37px;
    box-shadow: 0 14px 28px 0 hsla(210, 8%, 54%, 0.2);
    }
    .why__slider-card strong {
    font-size: 17px;
    font-size: 1.0625rem;
    line-height: 20px;
    line-height: 1.25rem;
    }
    .why__slider-card p {
    font-weight: 400;
    }
    .why__slider-card:before {
    display: block;
    position: absolute;
    content: "";
    bottom: -30px;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 0 30px 40px;
    border-color: transparent transparent transparent #fff;
    }
    .why .why__slider-navigation {
    margin-top: 48px;
    }
    .why__next,
    .why__prev {
    display: none;
    position: absolute;
    top: 13px;
    right: 15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 0;
    border: 1px solid #1f2759;
    cursor: pointer;
    transition: background-color 0.2s ease;
    }
    .why__next:before,
    .why__prev:before {
    position: relative;
    width: 10px;
    height: 10px;
    content: "";
    border-bottom: 1px solid #1f2759;
    border-left: 1px solid #1f2759;
    display: block;
    }
    .why__next:hover,
    .why__prev:hover {
    background-color: #1f2759;
    }
    .why__next:hover:before,
    .why__prev:hover:before {
    border-color: #fff;
    }
    .why__prev {
    right: 85px;
    }
    .why__prev:before {
    top: 18px;
    left: 18px;
    transform: rotate(45deg);
    }
    .why__next:before {
    top: 18px;
    left: 18px;
    transform: rotate(-135deg);
    }
    @media (min-width: 768px) {
    .why__next,
    .why__prev {
        display: block;
        top: 7px;
    }
    .why__title {
        margin-left: -40px;
    }
    .why__slider-wrapper {
        padding-top: 70px;
        padding-bottom: 130px;
    }
    .why__slider-navigation {
        display: none;
    }
    }
    .card {
    position: relative;
    border-radius: 7px;
    padding: 32px;
    text-decoration: none;
    z-index: 15;
    }
    .card,
    .card__head-icon {
    box-shadow: 0 10px 28px 0 hsla(210, 8%, 54%, 0.2);
    background-color: #fff;
    }
    .card__head-icon {
    position: absolute;
    top: 0;
    left: 38px;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #2b71ad;
    font-size: 38px;
    text-shadow: 1px 1px 10px rgba(18, 196, 139, 0.2);
    }
    .card__head-icon + .card__.page {
    margin-top: 30px;
    }
    .card__head-icon--center {
    left: 50%;
    transform: translate(-50%, -50%);
    }
    .card__head-icon--blue,
    .card__head-icon--green,
    .card__head-icon--pink {
    color: #fff;
    }
    .card__head-icon--green {
    background-color: #2b71ad;
    box-shadow: 0 4px 8px 0 rgba(18, 196, 139, 0.2);
    }
    .card__head-icon--pink {
    background-color: #ff6fb1;
    box-shadow: 0 4px 8px 0 rgba(255, 111, 177, 0.2);
    }
    .card__head-icon--blue {
    background-color: #24c1fd;
    box-shadow: 0 4px 8px 0 rgba(39, 198, 253, 0.2);
    }
    .card__title {
    color: #344554;
    font-weight: 700;
    font-size: 20px;
    font-size: 1.25rem;
    }
    .card__.page p,
    .card__title {
    line-height: 32px;
    line-height: 2rem;
    }
    .card__.page p {
    color: #6c767f;
    font-size: 16px;
    font-size: 1rem;
    }
    .card__author p {
    margin-bottom: 0;
    }
    .card--arrow:after {
    content: "";
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    border-right: 3px solid #b6c1ca;
    border-bottom: 3px solid #b6c1ca;
    margin-top: 16px;
    left: 50%;
    transform: rotate(-45deg) translateX(-50%);
    bottom: 40px;
    }
    .card--no-shadow {
    box-shadow: none;
    }
    .card-preview {
    padding: 74px 35px 35px;
    margin-bottom: 60px;
    max-width: 337px;
    min-height: 257px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    }
    .card-wallet {
    position: relative;
    padding: 22px;
    padding-bottom: 53px;
    width: 100%;
    background-color: #fff;
    }
    .card-wallet:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    width: 14px;
    height: 14px;
    transform: translateY(-50%) rotate(-45deg);
    border-right: 2px solid hsla(210, 8%, 54%, 0.25);
    border-bottom: 2px solid hsla(210, 8%, 54%, 0.25);
    }
    .card-wallet__logo {
    position: absolute;
    top: 30px;
    right: 25px;
    }
    .card-wallet__wrapper {
    position: relative;
    }
    .card-wallet__wrapper .card-wallet {
    position: relative;
    width: 100%;
    margin: 0 auto;
    }
    .card-wallet__wrapper .card-wallet:first-child,
    .card-wallet__wrapper .card-wallet:nth-child(2) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    }
    .card-wallet__wrapper .card-wallet:first-child {
    max-width: 295px;
    transform: translate(-50%, -25%);
    }
    .card-wallet__wrapper .card-wallet:first-child .card-wallet__logo {
    width: 23px;
    /* background-image: url(/build/images/hsbc.ddbad01c.png); */
    background-size: contain;
    }
    .card-wallet__wrapper .card-wallet:first-child .card-wallet__logo:before {
    display: block;
    content: "";
    padding-bottom: 84.375%;
    }
    .card-wallet__wrapper .card-wallet:nth-child(2) {
    max-width: 312px;
    transform: translate(-50%, 40%);
    }
    .card-wallet__wrapper .card-wallet:nth-child(2) .card-wallet__logo {
    width: 34px;
    /* background-image: url(/build/images/bb.ac8efaec.png); */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    }
    .card-wallet__wrapper .card-wallet:nth-child(2) .card-wallet__logo:before {
    display: block;
    content: "";
    padding-bottom: 100%;
    }
    .card-wallet__wrapper .card-wallet:last-child {
    max-width: 328px;
    transform: translateY(82%);
    }
    .card-wallet span {
    font-weight: 600;
    font-size: 12px;
    font-size: 0.75rem;
    }
    .card-wallet p,
    .card-wallet span {
    line-height: 15px;
    line-height: 0.9375rem;
    }
    .card-wallet p {
    font-size: 9.6px;
    font-size: 0.6rem;
    color: #6c767f;
    }
    .card-wallet em {
    display: block;
    font-style: normal;
    color: #52EBBA;
    margin-bottom: 25px;
    font-size: 23px;
    font-size: 1.4375rem;
    line-height: 32px;
    line-height: 2rem;
    }
    .card-wallet__add {
    position: absolute;
    bottom: -32px;
    left: 0;
    right: 0;
    max-width: 88%;
    margin: 0 auto;
    padding: 25px;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
    }
    .card-wallet__add p {
    margin: 0;
    text-align: center;
    }
    .card-spending {
    padding: 16px;
    background-color: #fff;
    margin-bottom: 15px;
    transform: translate(-42px, 53px);
    width: 270px;
    }
    @media screen and (min-width: 375px) {
    .card-spending {
        width: 100%;
    }
    }
    .card-spending__wrapper {
    padding: 8px;
    }
    .card-spending .card__title {
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 12px;
    }
    .card-spending .card__title,
    .card-spending .card__title .icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    }
    .card-spending .card__title .icon {
    -ms-flex-pack: center;
    justify-content: center;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    font-size: 15px;
    color: #fff;
    }
    .card-spending .card__title span {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    }
    .card-spending .card__title svg {
    margin-right: 9px;
    }
    .card-spending .card__label {
    margin-right: auto;
    margin-left: 7px;
    }
    .card-spending .price {
    text-transform: uppercase;
    color: #6c767f;
    }
    .card-spending:first-of-type .icon {
    background-color: #ff5154;
    }
    .card-spending:nth-of-type(2) .icon {
    background-color: #ffbf53;
    }
    .card-spending:nth-of-type(3) .icon {
    background-color: #f963a0;
    }
    .card-feature {
    box-shadow: none;
    margin-bottom: 70px;
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    }
    .card-feature .card__head-icon {
    left: 0;
    }
    .card-protect {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    max-width: 811px;
    margin: 0 auto;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 32px 25px 65px 32px;
    transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    html.non-mobileDevice .card-protect:hover {
    cursor: pointer;
    box-shadow: 0 20px 48px 0 hsla(210, 8%, 54%, 0.3);
    }
    .card-protect .card__head {
    position: static;
    transform: none;
    box-shadow: none;
    width: auto;
    height: auto;
    font-size: 95px;
    }
    .card-protect .card__container {
    max-width: 500px;
    width: 100%;
    text-align: center;
    }
    .card-protect .card__container p {
    padding: 8px 0;
    color: #6c767f;
    margin: 0;
    }
    .card-protect .card__title {
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 42px;
    line-height: 2.625rem;
    font-weight: 400;
    }
    .card-protect .card__title span {
    font-weight: 300;
    }
    .card-premium {
    background-color: transparent;
    padding: 16px 0;
    text-align: center;
    }
    .card-premium .card__title {
    font-weight: 600;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 22px;
    line-height: 1.375rem;
    }
    .card-premium .card__title + .button {
    margin-top: 24px;
    }
    .card-premium .card__.page p {
    margin: 15px 0 30px;
    font-weight: 300;
    line-height: 1.875em;
    }
    .card-premium .button {
    display: -ms-inline-flexbox;
    display: inline-flex;
    min-width: 274px;
    -ms-flex-pack: center;
    justify-content: center;
    }
    .card-plain {
    padding: 24px 24px 48px;
    max-width: 811px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    }
    .card-plain .card__title {
    font-weight: 600;
    }
    .card-plain .card__.page,
    .card-plain .card__title {
    font-size: 32px;
    line-height: 1.3125em;
    }
    .card-plain .card__.page p {
    margin-top: 15px;
    margin-bottom: 0;
    color: #6c767f;
    }
    .card-gods {
    padding: 32px 42px;
    height: 100%;
    }
    .card-gods .card__title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0;
    }
    .card-gods .card__user {
    text-align: center;
    margin: 21px 0 23px;
    }
    .card-gods .card__user-social {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    max-width: 160px;
    width: 100%;
    }
    .card-gods .card__user-social li {
    display: inline-block;
    list-style: none;
    }
    .card-gods .card__user-social a {
    display: block;
    padding: 12px;
    font-size: 20px;
    color: #6c767f;
    transition: color 0.2s ease;
    text-decoration: none;
    }
    .card-gods .card__user-social a:hover {
    color: #2b71ad;
    }
    .card-gods .card__position {
    color: #7f8993;
    font-size: 14px;
    }
    .card-gods--david .card__photo {
    /* background-image: url(/build/images/david.4887ab27.jpg); */
    background-size: auto auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .card-gods--david .card__photo {
        /* background-image: url(/build/images/david@2.174982b2.jpg); */
    }
    }
    .card-gods--jakub .card__photo {
    /* background-image: url(/build/images/jakub.5bfe5384.jpg); */
    background-size: auto auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .card-gods--jakub .card__photo {
        /* background-image: url(/build/images/jakub@2.eb8b0bbb.jpg); */
    }
    }
    .card-gods--josef .card__photo {
    /* background-image: url(/build/images/josef.be7c15cf.jpg); */
    background-size: auto auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .card-gods--josef .card__photo {
        /* background-image: url(/build/images/josef@2.32733185.jpg); */
    }
    }
    .card-gods--michal .card__photo {
    /* background-image: url(/build/images/michal.c782407f.jpg); */
    background-size: auto auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .card-gods--michal .card__photo {
        /* background-image: url(/build/images/michal@2.7e6e635c.jpg); */
    }
    }
    .card-gods--paja .card__photo {
    /* background-image: url(/build/images/paja.6ca55ea5.jpg); */
    background-size: auto auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .card-gods--paja .card__photo {
        /* background-image: url(/build/images/paja@2.3af6430b.jpg); */
    }
    }
    .card-gods--paja .card__user {
    margin-bottom: 0;
    }
    .card-gods--johana .card__photo {
    /* background-image: url(/build/images/johana.d3dc9e49.jpg); */
    background-size: auto auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .card-gods--johana .card__photo {
        /* background-image: url(/build/images/johana@2.0094b88b.jpg); */
    }
    }
    .card-gods--you {
    padding: 32px 22px;
    border: 1px solid #e4e9ee;
    background-color: #fff;
    box-shadow: none !important;
    }
    .card-gods--you .card__user {
    margin: 0;
    }
    .card-gods--you .card__title {
    margin: 15px 0;
    }
    .card-gods--you .card__photo {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 700;
    font-size: 38px;
    border-radius: 50%;
    background-color: #f1f2f3;
    }
    .card-gods--you .button {
    font-size: 14px;
    padding: 20px;
    width: 100%;
    min-width: 0;
    text-align: center;
    }
    .card-gods .card__photo {
    width: 119px;
    height: 119px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: contain;
    }
    .card-plan {
    height: 100%;
    padding: 32px 16px 10px;
    text-align: center;
    }
    .card-plan--description {
    display: none;
    box-shadow: none;
    background-color: transparent;
    }
    .card-plan--description .card__plan-item {
    width: 100%;
    margin-top: auto;
    font-size: 12px;
    }
    .card-plan .card__head {
    top: 0;
    }
    .card-plan .card__head-icon {
    width: 64px;
    height: 64px;
    }
    .card-plan .card__head-icon .icon-star-premium {
    color: #ffda33;
    text-shadow: 0 4px 8px rgba(253, 211, 46, 0.24);
    }
    .card-plan .card__head-icon .icon-star-plus {
    color: #c2d4e7;
    text-shadow: 0 4px 8px rgba(169, 189, 216, 0.24);
    }
    .card-plan .card__title {
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
    }
    .card-plan .card__.page p {
    font-size: 14px;
    font-weight: 600;
    color: #6c767f;
    line-height: 1.758em;
    margin: 24px 0;
    }
    .card-plan .card__plan-price {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    }
    .card-plan .card__plan-price--green {
    color: #2b71ad;
    }
    .card-plan .card__plan-item {
    position: relative;
    text-align: left;
    padding-left: 43px;
    padding-bottom: 25px;
    font-weight: 600;
    }
    .card-plan .card__plan-item:after {
    position: absolute;
    left: 14px;
    top: 15px;
    content: "";
    width: 12px;
    height: 6px;
    transform: rotate(-45deg) translateY(calc(-50% - 3px));
    border-left: 2px solid #2b71ad;
    border-bottom: 2px solid #2b71ad;
    }
    .card-plan .card__plan-item:before {
    position: absolute;
    left: 0;
    top: 15px;
    content: "";
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(18, 196, 139, 0.16);
    transform: translateY(-50%);
    }
    .card-plan .card__plan-item a {
    color: #344554;
    text-decoration: underline;
    }
    .card-plan .card__plan-item--unlimited .visible {
    display: none;
    }
    .card-plan .card__plan-item--uncheck:after {
    content: "X";
    font-size: 13px;
    width: 32px;
    height: 32px;
    transform: rotate(0);
    top: calc(1em - 7px);
    border: none;
    left: 12px;
    color: #979797;
    }
    .card-plan .card__plan-item--uncheck:before {
    background-color: hsla(208, 8%, 46%, 0.16);
    }
    .card-reason {
    height: 100%;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    margin-top: 140px;
    }
    .card-reason .card__head {
    top: -60px;
    left: 0;
    }
    .card-reason .card__title {
    font-weight: 600;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 32px;
    line-height: 2rem;
    margin-bottom: 48px;
    }
    .card-reason .card__.page p {
    font-size: 16px;
    }
    .card-reason .card__.page a {
    font-size: inherit;
    color: #6c767f;
    text-decoration: underline;
    }
    .card-transparent {
    background-color: transparent;
    box-shadow: none;
    }
    .card-transparent a {
    color: inherit;
    }
    .card-push {
    position: fixed;
    bottom: 50px;
    right: 7%;
    padding: 0;
    max-width: 800px;
    width: 90%;
    margin-left: auto;
    background-color: #fff;
    z-index: 99;
    }
    .card-push__inner {
    position: relative;
    padding: 20px;
    }
    .card-push__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
    }
    .card-push__bg:before {
    position: absolute;
    top: 0;
    left: auto;
    right: -170px;
    bottom: 0;
    max-width: 300px;
    width: 100%;
    height: auto;
    content: "";
    background: url(${ModalImage}) no-repeat;
    background-size: cover;
    background-position: 100% 0;
    }
    .card-push__close {
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #6c767f;
    line-height: 1;
    cursor: pointer;
    }
    .card-push__close,
    .card-push__content,
    .card-push__icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    }
    .card-push__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(18, 196, 139, 0.2);
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #2b71ad;
    margin-right: 32px;
    }
    .card-push__icon .icon {
    font-size: 25px;
    color: #fff;
    }
    .card-push__heading {
    font-size: 18px;
    font-size: 1.125rem;
    line-height: 29px;
    line-height: 1.8125rem;
    font-weight: 300;
    }
    .card-push__heading b {
    display: block;
    }
    .card-balance {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 0;
    }
    .card-balance .card__.page,
    .card-balance .card__head {
    position: static;
    -ms-flex-align: center;
    align-items: center;
    transform: translate(0);
    }
    .card-balance .card__head {
    background-color: #ffbf53;
    width: 64px;
    height: 64px;
    margin-right: 24px;
    }
    .card-balance .card__head .icon {
    color: #fff;
    font-size: 18px;
    }
    .card-balance .card__.page {
    margin-top: 0;
    line-height: 1;
    }
    .card-balance .card__.page p {
    display: block;
    color: #344554;
    font-weight: 600;
    margin-bottom: 0;
    }
    .card-balance .card__.page span {
    color: #6c767f;
    }
    .card-balance__status {
    position: absolute;
    top: 100%;
    bottom: auto;
    right: 0;
    max-width: 187px;
    width: 100%;
    padding: 16px 19px 18px;
    margin-left: auto;
    transform: translateY(-235%);
    box-shadow: 0 8px 22px 0 hsla(210, 8%, 54%, 0.17);
    }
    .card-balance__status--down {
    margin-top: 16px;
    transform: translateY(-135%);
    transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s,
        top 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s;
    }
    .card-balance__status--down .card__.page .icon {
    background-color: #fb6666;
    }
    .card-balance__status .card__.page,
    .card-balance__status .icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    }
    .card-balance__status .icon {
    width: 32px;
    height: 32px;
    background-color: #2b71ad;
    border-radius: 50%;
    -ms-flex-pack: center;
    justify-content: center;
    }
    .card-balance__status .icon span {
    font-size: 12px;
    color: #fff;
    font-weight: 300;
    }
    .card-balance__status p {
    margin: 0 0 0 11px;
    font-weight: 600;
    font-size: 11px;
    font-size: 0.6875rem;
    line-height: 19px;
    line-height: 1.1875rem;
    }
    .card-balance__status span {
    display: block;
    color: #2b71ad;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    line-height: 19px;
    line-height: 1.1875rem;
    }
    .card-balance__status.is-animated {
    opacity: 1;
    top: 100%;
    }
    @media (min-width: 576px) {
    .card-premium .card__.page p {
        margin: 10px 0 25px;
        font-weight: 400;
    }
    .card-premium .button {
        max-width: 274px;
        display: inline-block;
    }
    .card-feature {
        padding-left: 26px;
        padding-right: 26px;
    }
    .card-feature .card__head-icon {
        left: 38px;
    }
    }
    @media (min-width: 768px) {
    .card--arrow {
        padding-right: 100px;
    }
    .card--arrow:after {
        position: absolute;
        top: 50%;
        right: 35px;
        left: auto;
        transform: translateY(-50%) rotate(-45deg);
        margin: 0;
    }
    .card-preview {
        margin-bottom: 0;
        min-height: 272px;
        height: 100%;
    }
    .card-spending {
        transform: translate(-48px, 53px);
    }
    .card-spending-wrapper {
        padding: 43px 8px 8px;
    }
    .card-spending span {
        font-size: 12px;
        font-size: 0.75rem;
        line-height: 16px;
        line-height: 1rem;
    }
    .card-protect {
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .card-protect .card__container {
        padding-left: 40px;
        text-align: left;
    }
    .card-protect .card__title {
        font-size: 32px;
        font-weight: 400;
        line-height: 1.3125em;
    }
    .card-protect .card__title span {
        font-weight: 300;
    }
    .card-plain {
        padding: 50px 72px;
        text-align: left;
    }
    .card-push__inner {
        position: relative;
        padding: 20px 64px;
    }
    .card-push__icon {
        width: 80px;
        height: 80px;
    }
    .card-push__heading,
    .card-push__icon .icon {
        font-size: 32px;
    }
    .card-reason {
        margin-top: 160px;
    }
    .card-wallet span {
        font-size: 14.4px;
        font-size: 0.9rem;
    }
    .card-wallet p,
    .card-wallet span {
        line-height: 19px;
        line-height: 1.1875rem;
    }
    .card-wallet p {
        font-size: 12px;
        font-size: 0.75rem;
    }
    .card-wallet em {
        font-size: 29px;
        font-size: 1.8125rem;
        line-height: 39px;
        line-height: 2.4375rem;
    }
    .card-wallet__add p {
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 19px;
        line-height: 1.1875rem;
    }
    .card-wallet__wrapper .card-wallet:first-of-type {
        max-width: 369px;
    }
    .card-wallet__wrapper .card-wallet:nth-of-type(2) {
        max-width: 390px;
    }
    .card-wallet__wrapper .card-wallet:last-of-type {
        max-width: 410px;
    }
    }
    @media (min-width: 992px) {
    .card-reason {
        padding: 32px;
        margin-top: 75px;
    }
    .card-reason .card__head {
        top: 0;
        left: 38px;
    }
    .card-wallet {
        transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .card-wallet p {
        font-size: 14px;
    }
    .card-wallet:first-child {
        transform: translate(-50%, -25%) scale(1);
    }
    .card-wallet:nth-child(2) {
        transform: translate(-50%, 40%) scale(1);
    }
    .card-wallet:nth-child(3) {
        transform: translateY(82%) scale(1);
    }
    .card.card-plan {
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .card.card-plan--description {
        display: -ms-flexbox;
        display: flex;
    }
    .card.card-plan--description .card__plan .card__plan-price {
        margin-top: 168px;
    }
    .card.card-plan--description .card__plan .card__plan-item {
        font-size: 16px;
    }
    .card.card-plan--description .card__plan .card__plan-item a {
        font-size: 14px;
    }
    .card-balance__status {
        opacity: 0;
        top: calc(100% + 20px);
        min-width: 234px;
        padding: 30px 24px;
        right: -40px;
        transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s,
        top 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
    }
    .card-balance__status p {
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 24px;
        line-height: 1.5rem;
    }
    .card-balance__status span {
        font-size: 20px;
        font-size: 1.25rem;
        line-height: 24px;
        line-height: 1.5rem;
    }
    .card-balance__status--down {
        transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s,
        top 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s;
    }
    .card-balance__status.is-animated {
        opacity: 1;
        top: 100%;
    }
    .card-plan {
        display: -ms-flexbox;
        display: flex;
    }
    .card-plan.card-plan--description {
        display: block;
        box-shadow: none;
        background-color: transparent;
    }
    .card-plan.card-plan--description .card__plan {
        width: 100%;
        margin-top: 2px;
    }
    .card-plan.card-plan--description .card__plan-price {
        text-align: left;
        margin-bottom: 11px;
    }
    .card-plan.card-plan--description .card__plan .card__plan-item {
        width: 100%;
        min-height: 32px;
        height: auto;
        font-weight: 600;
        margin-bottom: 21px;
        font-size: 16px;
        font-size: 1rem;
        line-height: 24px;
        line-height: 1.5rem;
    }
    .card-plan.card-plan--description .card__plan .card__plan-item a {
        text-decoration: underline;
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 24px;
        line-height: 1.5rem;
    }
    .card-plan.card-plan--description .card__plan .card__plan-item:after,
    .card-plan.card-plan--description .card__plan .card__plan-item:before {
        content: none;
    }
    .card-plan .card__top {
        min-height: 223px;
    }
    .card-plan .card__top .card__.page {
        padding: 0 6px;
    }
    .card-plan .card__plan-item:not(.card__plan-item--unlimited) {
        position: relative;
        font-size: 0;
        width: 32px;
        height: 32px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 21px;
        min-height: 0;
        padding: 0;
    }
    .card-plan .card__plan-item.card__plan-item--text:after,
    .card-plan .card__plan-item.card__plan-item--text:before {
        content: none;
    }
    .card-plan .card__plan-item.card__plan-item--text .visible {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        color: #6c767f;
    }
    .card-plan .card__plan-item--unlimited {
        display: block;
        font-size: 0;
        padding-left: 0;
        padding-bottom: 0;
        margin-bottom: 24px;
        min-height: 0;
        text-align: center;
    }
    .card-plan .card__plan-item--unlimited:after,
    .card-plan .card__plan-item--unlimited:before {
        content: none;
    }
    .card-plan .card__plan-item--unlimited .visible {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        font-size: 16px;
        color: #2b71ad;
    }
    }
    @media (min-width: 1200px) {
    .card-plan .card__top {
        min-height: 174px;
    }
    }
    .plan__info {
    -ms-flex-pack: center;
    justify-content: center;
    }
    .plan__info-perex {
    display: block;
    max-width: 446px;
    font-weight: 600;
    color: #6c767f;
    margin: 35px auto 40px;
    text-align: center;
    font-size: 14px;
    font-size: 0.875rem;
    line-height: 25px;
    line-height: 1.5625rem;
    opacity: 0;
    transform: translateY(-10px);
    }
    .plan__title {
    font-size: 38px;
    font-size: 2.375rem;
    line-height: 55px;
    line-height: 3.4375rem;
    margin-bottom: 65px;
    text-align: center;
    }
    .plan__choise {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 327px;
    padding: 3px 32px;
    width: 100%;
    height: 48px;
    border: 1px solid #2b71ad;
    border-radius: 24px;
    cursor: pointer;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    }
    .plan__choise.is-active span:first-child {
    color: #fff;
    }
    .plan__choise.is-active span:last-of-type {
    color: #2b71ad !important;
    }
    .plan__choise.is-active .plan__choise-save {
    opacity: 0;
    right: -135px;
    }
    .plan__choise.is-active .plan__choise-slider {
    left: -1px;
    right: auto;
    transform: translateX(0);
    }
    .plan__choise-slider {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: calc(100% + 2px);
    width: 50%;
    height: 100%;
    background-color: #2b71ad;
    border-radius: 24px;
    transform: translateX(-100%);
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .plan__choise span:not(.plan__choise-save) {
    position: relative;
    z-index: 3;
    color: #2b71ad;
    pointer-events: none;
    }
    .plan__choise span:not(.plan__choise-save).is-active,
    .plan__choise span:not(.plan__choise-save):last-of-type {
    color: #fff;
    }
    .plan__choise-save {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    top: -55px;
    right: -40px;
    width: 100px;
    height: 40px;
    background-color: #fff;
    color: #2b71ad;
    box-shadow: 0 10px 28px 0 hsla(210, 8%, 54%, 0.2);
    border-radius: 8px;
    padding: 5px;
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .plan__choise-save:before {
    display: block;
    position: absolute;
    content: "";
    top: 29px;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #fff;
    }
    .plan__label {
    font-size: 16px;
    font-size: 1rem;
    line-height: 25px;
    line-height: 1.5625rem;
    color: #6c767f;
    padding-bottom: 20px;
    text-align: center;
    }
    .plan .card.card-premium .card__title {
    max-width: 314px;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 22px;
    line-height: 1.375rem;
    }
    .plan .slider__arrows {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 25px;
    }
    .plan .slider__next,
    .plan .slider__prev {
    display: block;
    position: static;
    }
    .plan .slider__prev {
    margin-right: 15px;
    }
    @media (min-width: 768px) {
    .plan__label,
    .plan__title {
        text-align: center;
    }
    .plan__title {
        margin-bottom: 40px;
    }
    .plan__label {
        font-weight: 600;
        margin-bottom: 44px;
    }
    .plan__choise-save {
        right: -117px;
        top: -47px;
    }
    .plan .card-plan {
        opacity: 0;
    }
    }
    @media (min-width: 992px) {
    .plan__label {
        margin-bottom: 65px;
    }
    .plan__info p {
        margin-top: 0;
    }
    }
    .team__row [class^="col-"] {
    margin-bottom: 40px;
    }
    .team__perex,
    .team__title {
    text-align: center;
    }
    .team__title {
    margin-top: 65px;
    font-weight: 600;
    }
    .team__perex {
    margin-bottom: 40px;
    color: #6c767f;
    }
    .team .team__slider-navigation {
    margin-top: 0;
    }
    @media (min-width: 768px) {
    .team__perex {
        font-size: 20px;
        font-size: 1.25rem;
        line-height: 33px;
        line-height: 2.0625rem;
        margin-bottom: 80px;
    }
    .team__slider {
        max-width: 570px;
        margin: 0 auto;
    }
    .team .circle.green:before {
        top: auto;
        bottom: 0;
    }
    }
    @media (min-width: 992px) {
    .team__row {
        margin-bottom: 40px;
    }
    .team__slider {
        max-width: none;
    }
    .team__slider-item {
        opacity: 0;
        transition: none;
    }
    .team .circle:before {
        left: -547px;
        top: 100px;
    }
    }
    .banks__title {
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
    }
    .banks .search__whisper {
    position: absolute;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    z-index: 7001;
    max-height: 256px;
    overflow-y: auto;
    }
    .banks .search__whisper-item {
    padding: 10px 20px;
    margin-bottom: 0;
    transition: background-color 0.2s ease-in-out;
    }
    .banks .search__whisper-item:last-of-type {
    margin-bottom: 0;
    }
    .banks .search__whisper-item:hover {
    background-color: #e4e9ee;
    }
    .banks__country-title {
    color: #344554;
    font-weight: 600;
    margin-bottom: 20px;
    top: -20px;
    }
    .banks__country-title a {
    color: inherit;
    text-decoration: underline;
    }
    .banks__country-title a:hover {
    text-decoration: none;
    }
    .banks__country-title-country {
    margin-top: 50px !important;
    margin-bottom: 0 !important;
    }
    .banks__items {
    position: relative;
    -ms-flex-align: start;
    align-items: flex-start;
    margin: 50px -20px 20px;
    }
    .banks__item {
    display: -ms-flexbox;
    display: flex;
    position: relative;
    width: 100%;
    border: 1px solid #e4e9ee;
    border-radius: 7px;
    margin: 0 10px 30px 0;
    opacity: 0;
    overflow: hidden;
    }
    .banks__item:hover {
    cursor: pointer;
    }
    .banks__item--active {
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 15px 28px 0 hsla(210, 8%, 54%, 0.2);
    z-index: 7000;
    border: 0;
    padding-bottom: 30px;
    background-color: #fff;
    overflow: visible;
    opacity: 1;
    }
    .banks__item--active .banks__item-wrapper {
    display: block;
    z-index: 999;
    }
    .banks__item--active .banks__item-label:after {
    top: calc(50% - 3px);
    transform: rotate(225deg);
    border-color: #52EBBA;
    }
    .banks__item--active .banks__item-label .fill {
    display: block;
    }
    .banks__item-flag {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 hsla(210, 8%, 54%, 0.17);
    vertical-align: text-bottom;
    }
    .banks__item-label {
    display: block;
    position: relative;
    width: 100%;
    padding: 18px 50px 18px 25px;
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    .banks__item-label .flag-icon {
    margin-right: 15px;
    }
    .banks__item-label:after {
    position: absolute;
    display: block;
    content: "";
    top: calc(50% - 10px);
    right: 27px;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    border-bottom: 2.5px solid #6c767f;
    border-right: 2.5px solid #6c767f;
    transition: border-color 0.2s ease, transform 0.2s ease;
    }
    .banks__item-label .fill {
    top: 100%;
    height: 30px;
    z-index: 20;
    }
    .banks__item-label .fill,
    .banks__item-wrapper {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    }
    .banks__item-wrapper {
    top: 86px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    box-shadow: 0 20px 28px 0 hsla(210, 8%, 54%, 0.2);
    }
    .banks__item-content {
    padding: 16px;
    display: -ms-flexbox;
    display: flex;
    }
    .banks__item-content ul {
    padding: 0;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    }
    .banks__item-content li {
    list-style: none;
    margin-bottom: 20px;
    }
    .banks__item-content a {
    color: #6c767f;
    text-decoration: none;
    }
    .banks__item-content img {
    max-width: 24px;
    max-height: 24px;
    overflow: hidden;
    }
    .banks__item-content span {
    margin-left: 15px;
    }
    @media (max-width: 767.98px) {
    .banks .selected--item-mod .banks__item {
        box-shadow: none;
        border: none;
        margin-bottom: 0 !important;
        padding-bottom: 0;
    }
    .banks .selected--item-mod .banks__item-label {
        display: none;
    }
    .banks .selected--item-mod .banks__item-wrapper {
        display: block;
        position: relative;
        top: -40px;
        background-color: transparent;
        box-shadow: none;
    }
    .banks .selected--item-mod .banks__item-content {
        padding: 16px 27px 0;
    }
    .banks .selected--item-mod .banks__item-content ul {
        margin-bottom: 0;
    }
    }
    @media (min-width: 768px) {
    .banks__mobile-select {
        display: none;
    }
    .banks__country-title {
        margin: 0;
        top: 0;
    }
    .banks__country-title--notfound {
        margin-bottom: 48px;
    }
    .banks__country-title:not(.banks__country-title--notfound) {
        display: none;
    }
    .banks__item-wrapper {
        z-index: -2999;
    }
    .banks__item-content ul {
        column-count: 2;
    }
    .banks__items {
        margin-bottom: 0;
    }
    .banks__items .right .banks__item-wrapper {
        left: calc(-100% - 30px);
        width: calc(200% + 30px);
    }
    .banks__items .left .banks__item-wrapper {
        left: 0;
        width: calc(200% + 30px);
    }
    .banks form {
        max-width: 532px;
        margin: 0 auto;
        width: 100%;
    }
    }
    @media (min-width: 992px) {
    .banks form {
        margin-bottom: 80px;
    }
    .banks__items {
        margin-top: 0;
    }
    .banks__items .left .banks__item-wrapper {
        left: 0;
        width: calc(300% + 60px);
    }
    .banks__items .right .banks__item-wrapper {
        left: calc(-200% - 60px);
        width: calc(300% + 60px);
    }
    .banks__items .center .banks__item-wrapper {
        left: calc(-100% - 30px);
        width: calc(300% + 60px);
    }
    }
    .logos-wrapper {
    position: relative;
    z-index: 10;
    }
    .logos-wrapper .row {
    -ms-flex-align: center;
    align-items: center;
    }
    .logos-wrapper .logo {
    width: 100%;
    height: 100%;
    opacity: 1;
    }
    .logos-wrapper .logo .image {
    width: 100%;
    background-repeat: no-repeat;
    }
    .logos-wrapper .logo--ing {
    -ms-flex-order: 1;
    order: 1;
    margin-bottom: 25px;
    }
    .logos-wrapper .logo--ing .image {
    /* background-image: url(/build/images/ing.77f3bc2e.png); */
    background-size: cover;
    max-width: 79.3px;
    margin-left: auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--ing .image {
        /* background-image: url(/build/images/ing@2.d6dd162e.png); */
    }
    }
    .logos-wrapper .logo--ing .image:before {
    display: block;
    content: "";
    padding-bottom: 26.55738%;
    }
    .logos-wrapper .logo--barclays {
    -ms-flex-order: 2;
    order: 2;
    margin-bottom: 25px;
    }
    .logos-wrapper .logo--barclays .image {
    /* background-image: url(/build/images/barclays.1ccafe76.png); */
    background-size: cover;
    max-width: 64px;
    margin: 0 auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--barclays .image {
        /* background-image: url(/build/images/barclays@2.f4450bae.png); */
    }
    }
    .logos-wrapper .logo--barclays .image:before {
    display: block;
    content: "";
    padding-bottom: 51.5625%;
    }
    .logos-wrapper .logo--hsbc {
    -ms-flex-order: 5;
    order: 5;
    }
    .logos-wrapper .logo--hsbc .image {
    /* background-image: url(/build/images/hsbc.b0f18903.png); */
    background-size: contain;
    max-width: 48px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--hsbc .image {
        /* background-image: url(/build/images/hsbc@2.bcef658f.png); */
    }
    }
    .logos-wrapper .logo--hsbc .image:before {
    display: block;
    content: "";
    padding-bottom: 85.41667%;
    }
    .logos-wrapper .logo--america {
    -ms-flex-order: 4;
    order: 4;
    }
    .logos-wrapper .logo--america .image {
    /* background-image: url(/build/images/amerika.5aac756a.png); */
    background-size: contain;
    max-width: 82px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--america .image {
        /* background-image: url(/build/images/amerika@2.d0828192.png); */
    }
    }
    .logos-wrapper .logo--america .image:before {
    display: block;
    content: "";
    padding-bottom: 41.46341%;
    }
    .logos-wrapper .logo--citybank {
    -ms-flex-order: 6;
    order: 6;
    }
    .logos-wrapper .logo--citybank .image {
    /* background-image: url(/build/images/citi.663d250f.png); */
    background-size: contain;
    max-width: 83px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--citybank .image {
        /* background-image: url(/build/images/citi@2.cee96aca.png); */
    }
    }
    .logos-wrapper .logo--citybank .image:before {
    display: block;
    content: "";
    padding-bottom: 27.71084%;
    }
    .logos-wrapper .logo--chase {
    -ms-flex-order: 6;
    order: 6;
    }
    .logos-wrapper .logo--chase .image {
    /* background-image: url(/build/images/chase.3820eeab.png); */
    background-size: contain;
    max-width: 83px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--chase .image {
        /* background-image: url(/build/images/chase@2.906c4fa7.png); */
    }
    }
    .logos-wrapper .logo--chase .image:before {
    display: block;
    content: "";
    padding-bottom: 27.71084%;
    }
    .logos-wrapper .logo--debank {
    -ms-flex-order: 7;
    order: 7;
    }
    .logos-wrapper .logo--debank .image {
    /* background-image: url(/build/images/debank.bb712f40.png); */
    background-size: contain;
    max-width: 79px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--debank .image {
        /* background-image: url(/build/images/debank@2.8d381eb5.png); */
    }
    }
    .logos-wrapper .logo--debank .image:before {
    display: block;
    content: "";
    padding-bottom: 54.43038%;
    }
    .logos-wrapper .logo--paypal {
    -ms-flex-order: 3;
    order: 3;
    margin-bottom: 25px;
    }
    .logos-wrapper .logo--paypal .image {
    /* background-image: url(/build/images/PayPal.9e289018.png); */
    background-size: contain;
    max-width: 81px;
    margin-right: auto;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .logos-wrapper .logo--paypal .image {
        /* background-image: url(/build/images/PayPal@2.65805a53.png); */
    }
    }
    .logos-wrapper .logo--paypal .image:before {
    display: block;
    content: "";
    padding-bottom: 24.69136%;
    }
    @media (min-width: 768px) {
    .logos-wrapper {
        max-width: 545px;
        margin: 0 auto;
    }
    .logos-wrapper .logo {
        opacity: 0;
    }
    .logos-wrapper .logo:nth-child(-n + 4) .image {
        margin: 0 auto;
    }
    .logos-wrapper .logo--ing {
        -ms-flex-order: 1;
        order: 1;
        margin-bottom: 0;
    }
    .logos-wrapper .logo--ing .image {
        max-width: 124px;
        margin-left: auto;
    }
    .logos-wrapper .logo--barclays {
        -ms-flex-order: 2;
        order: 2;
        margin-bottom: 0;
    }
    .logos-wrapper .logo--barclays .image {
        max-width: 99px;
        margin: 0 auto;
    }
    .logos-wrapper .logo--hsbc {
        -ms-flex-order: 3;
        order: 3;
    }
    .logos-wrapper .logo--hsbc .image {
        max-width: 72px;
    }
    .logos-wrapper .logo--america {
        -ms-flex-order: 4;
        order: 4;
    }
    .logos-wrapper .logo--america .image {
        max-width: 128px;
    }
    .logos-wrapper .logo--citybank {
        -ms-flex-order: 5;
        order: 5;
        margin-top: 50px;
    }
    .logos-wrapper .logo--citybank .image {
        max-width: 128px;
        margin-left: auto;
    }
    .logos-wrapper .logo--chase {
        -ms-flex-order: 5;
        order: 5;
        margin-top: 50px;
    }
    .logos-wrapper .logo--chase .image {
        max-width: 128px;
        margin-left: auto;
    }
    .logos-wrapper .logo--debank {
        -ms-flex-order: 6;
        order: 6;
        margin-top: 50px;
    }
    .logos-wrapper .logo--debank .image {
        max-width: 122px;
        margin-left: auto;
        margin-right: auto;
    }
    .logos-wrapper .logo--paypal {
        -ms-flex-order: 7;
        order: 7;
        margin-bottom: 0;
        margin-top: 50px;
    }
    .logos-wrapper .logo--paypal .image {
        max-width: 124px;
        margin-right: auto;
    }
    }
    @media (min-width: 992px) {
    .logos-wrapper {
        max-width: 1040px;
    }
    .logos-wrapper .logo {
        width: auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        max-width: none;
        margin-bottom: 0;
        margin-top: 0;
    }
    .logos-wrapper .logo--ing {
        -ms-flex-order: 1;
        order: 1;
        margin-bottom: 0;
    }
    .logos-wrapper .logo--ing .image {
        max-width: 125px;
        margin-left: auto;
    }
    .logos-wrapper .logo--barclays {
        -ms-flex-order: 2;
        order: 2;
        margin-bottom: 0;
    }
    .logos-wrapper .logo--barclays .image {
        max-width: 99px;
        margin: 0 auto;
    }
    .logos-wrapper .logo--hsbc {
        -ms-flex-order: 3;
        order: 3;
    }
    .logos-wrapper .logo--hsbc .image {
        max-width: 72px;
    }
    .logos-wrapper .logo--america {
        -ms-flex-order: 4;
        order: 4;
    }
    .logos-wrapper .logo--america .image {
        max-width: 128px;
    }
    .logos-wrapper .logo--citybank {
        -ms-flex-order: 5;
        order: 5;
        margin-top: 0;
    }
    .logos-wrapper .logo--citybank .image {
        max-width: 128px;
        margin-left: auto;
    }
    .logos-wrapper .logo--chase {
        -ms-flex-order: 5;
        order: 5;
        margin-top: 0;
    }
    .logos-wrapper .logo--chase .image {
        max-width: 128px;
        margin-left: auto;
    }
    .logos-wrapper .logo--debank {
        -ms-flex-order: 6;
        order: 6;
        margin-top: 0;
    }
    .logos-wrapper .logo--debank .image {
        max-width: 122px;
        margin-left: auto;
        margin-right: auto;
    }
    .logos-wrapper .logo--paypal {
        -ms-flex-order: 7;
        order: 7;
        margin-bottom: 0;
        margin-top: 0;
    }
    .logos-wrapper .logo--paypal .image {
        max-width: 124px;
        margin-right: auto;
    }
    }
    .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(52, 69, 84, 0.16);
    opacity: 0;
    z-index: -100;
    }
    .modal,
    .modal__inner {
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    }
    .modal__inner {
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    padding: 0 18px;
    }
    .modal__scroll-container {
    margin: auto;
    padding: 50px 0;
    max-height: 100%;
    max-width: 800px;
    width: 100%;
    overflow: auto;
    }
    .modal__content {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 7px;
    margin: 0 auto;
    box-shadow: 0 10px 27px 0 hsla(210, 8%, 54%, 0.17);
    opacity: 0;
    transform: scale(0.85);
    }
    .modal__content-bg {
    overflow: hidden;
    z-index: -1;
    }
    .modal__content-bg,
    .modal__content-bg:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    }
    .modal__content-bg:before {
    max-width: 500px;
    width: 100%;
    height: auto;
    content: "";
    background: url(${ModalImage}) no-repeat;
    background-size: contain;
    background-position: 100%;
    transform: translateX(100%);
    }
    .modal__close {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #6c767f;
    line-height: 1;
    cursor: pointer;
    }
    @media (min-width: 992px) {
    .modal__content {
        padding: 60px 30px;
    }
    }
    .shape.is-loaded .user-image {
    display: inline-block;
    width: 40px;
    height: 40px;
    }
    .shape.is-loaded .user-image--first {
    /* background-image: url(/build/images/user-2-picture.922145f2.jpg); */
    background-size: auto auto;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .shape.is-loaded .user-image--first {
        /* background-image: url(/build/images/user-2-picture@2.c4b75488.jpg); */
    }
    }
    .shape.is-loaded .user-image--second {
    /* background-image: url(/build/images/user-picture.b99d2df5.jpg); */
    background-size: auto auto;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .shape.is-loaded .user-image--second {
        /* background-image: url(/build/images/user-picture@2.2a0d041d.jpg); */
    }
    }
    .shape__heading {
    position: relative;
    z-index: 10;
    font-size: 32px;
    font-size: 2rem;
    line-height: 43px;
    line-height: 2.6875rem;
    }
    .shape__step {
    -ms-flex-align: center;
    align-items: center;
    }
    .shape__step,
    .shape__step-container {
    position: relative;
    }
    .shape__step--first {
    margin-top: 34px;
    margin-bottom: 48px;
    }
    .shape__step--first div[class^="col-"]:last-of-type {
    padding-top: 50px;
    }
    .shape__step--first ul {
    margin-bottom: 44px;
    }
    .shape__step--second {
    margin-top: 275px;
    margin-bottom: 50px;
    }
    .shape__step--second div[class^="col-"]:first-of-type {
    -ms-flex-order: 2;
    order: 2;
    margin-top: 40px;
    }
    .shape__step--thirt .shape__step-box {
    margin-left: auto;
    margin-right: 0;
    }
    .shape__step-box {
    width: 100%;
    margin: 0 auto;
    }
    .shape__step-box--budget {
    max-width: 90%;
    margin-top: 45px;
    }
    .shape__step-box--budget .card__head {
    width: 54px;
    height: 54px;
    font-size: 25px;
    z-index: 100;
    }
    .shape__step-box > :not(.shape__step-number) {
    z-index: 2;
    position: relative;
    }
    .shape__step-box .sub-heading {
    color: #52EBBA;
    font-weight: 600;
    font-size: 17px;
    font-size: 1.0625rem;
    line-height: 23px;
    line-height: 1.4375rem;
    text-shadow: 0 4px 8px rgba(18, 196, 139, 0.2);
    }
    .shape__step-box .heading {
    font-weight: 600;
    margin-top: 18px;
    margin-bottom: 0;
    font-size: 26px;
    font-size: 1.625rem;
    line-height: 40px;
    line-height: 2.5rem;
    }
    .shape__step-box ul {
    margin-top: 23px;
    padding-left: 30px;
    }
    .shape__step-box li {
    position: relative;
    list-style: none;
    color: #6c767f;
    font-size: 16px;
    font-size: 1rem;
    line-height: 34px;
    line-height: 2.125rem;
    margin-bottom: 24px;
    }
    .shape__step-box li:before {
    position: absolute;
    display: block;
    width: 14px;
    height: 7px;
    content: "";
    top: 10px;
    left: -30px;
    border-bottom: 2px solid #52EBBA;
    border-left: 2px solid #52EBBA;
    transform: rotate(-45deg);
    }
    .shape__step-number {
    display: none;
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    }
    @media (min-width: 576px) {
    .shape__step-box,
    .shape__step-box--budget {
        max-width: none;
    }
    }
    @media (min-width: 768px) {
    .shape {
        margin-top: 98px;
        margin-bottom: 46px;
    }
    .shape .heading {
        font-size: 32px;
        font-size: 2rem;
        line-height: 42px;
        line-height: 2.625rem;
    }
    .shape .circle:before {
        top: -550px;
    }
    .shape__step .shape__step-box {
        margin-left: 50px;
    }
    .shape__step .shape__step-box--budget {
        max-width: 356px;
        margin-left: auto;
        margin-right: auto;
    }
    .shape__step--first {
        margin-top: 120px;
        margin-bottom: 372px;
    }
    .shape__step--second {
        margin-top: 0;
        margin-bottom: 225px;
        padding-top: 112px;
    }
    .shape__step--second .shape__step-container {
        max-width: 550px;
        margin: 0 auto;
    }
    .shape__step--second .heading {
        max-width: 360px;
    }
    .shape__step--second .shape__step-box {
        max-width: 650px;
    }
    .shape__step--thirt .heading {
        max-width: 360px;
    }
    .shape__step-box {
        max-width: none;
    }
    .shape__step-box--budget {
        max-width: 100%;
    }
    .shape__step-number {
        display: block;
        top: -62%;
    }
    }
    @media (min-width: 992px) {
    .shape {
        margin-top: 140px;
        margin-bottom: 68px;
    }
    .shape .circle:before {
        top: -340px;
    }
    .shape__step--first {
        margin-top: 80px;
    }
    .shape__step--first .shape__step-box:not(.card-wallet__wrapper) {
        transform: translateY(155px);
        max-width: none;
    }
    .shape__step--first .card-wallet__wrapper {
        margin-left: auto;
        margin-top: 100px;
        margin-right: 0;
        max-width: 410px;
        width: 100%;
    }
    .shape__step:nth-of-type(2) {
        margin-top: 450px;
        margin-bottom: 230px;
        padding-top: 0;
    }
    .shape__step:nth-of-type(2) .shape__step-container {
        max-width: none;
        margin: auto;
    }
    .shape__step:nth-of-type(2) div[class^="col-"]:first-of-type {
        -ms-flex-order: -1;
        order: -1;
        margin-top: 40px;
    }
    .shape__step:nth-of-type(2) .shape__step-number {
        top: -33%;
        right: -8%;
    }
    .shape__step:nth-of-type(3) > div:last-of-type {
        margin: 0 0 0 auto !important;
    }
    .shape__step:nth-of-type(3) .shape__step-number {
        top: -48%;
        right: -10%;
    }
    .shape__step:nth-of-type(3) svg {
        margin-right: 30px;
        margin-top: 40px;
    }
    .shape__step .shape__step-box:not(.shape__step-box--budget) {
        margin-left: 0;
        max-width: none;
    }
    .shape__step .shape__step-box--budget {
        margin-right: 0;
    }
    .shape__step .shape__step-box--budget,
    .shape__step .shape__step-box--budget .card-spending {
        transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .shape__step .shape__step-box--budget.not-active {
        transform: translate(-40px, 40px);
    }
    .shape__step .shape__step-box--budget.not-active .card-spending {
        transform: translateY(10px);
        transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .shape__step-number {
        top: -58%;
        right: 13%;
        left: auto;
    }
    .shape__heading {
        font-size: 38px;
        font-size: 2.375rem;
        line-height: 55px;
        line-height: 3.4375rem;
    }
    }
    .story__content {
    max-width: 505px;
    width: 100%;
    }
    .story__title {
    font-size: 26px;
    font-size: 1.625rem;
    line-height: 36px;
    line-height: 2.25rem;
    margin-bottom: 30px;
    text-align: center;
    }
    .story__content p {
    margin-bottom: 20px;
    color: #6c767f;
    font-weight: 400;
    line-height: 2em;
    }
    .story__image--phone {
    margin-bottom: 170px;
    }
    .story__bg--big,
    .story__bg--small,
    .story__bg--team {
    position: relative;
    box-shadow: 0 10px 28px 0 hsla(210, 8%, 54%, 0.2);
    width: 100%;
    }
    .story__bg--big {
    /* background-image: url(/build/images/story-1.fd78cad8.jpg); */
    background-size: cover;
    margin-left: auto;
    max-width: 283px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .story__bg--big {
        /* background-image: url(/build/images/story-1@2.e53429c1.jpg); */
    }
    }
    .story__bg--big:before {
    display: block;
    content: "";
    padding-bottom: 94.57627%;
    }
    .story__bg--small {
    position: absolute;
    /* background-image: url(/build/images/story-2.d3ef9e54.jpg); */
    background-size: cover;
    max-width: 257px;
    transform: translateY(-100px);
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .story__bg--small {
        /* background-image: url(/build/images/story-2@2.ae150781.jpg); */
    }
    }
    .story__bg--small:before {
    display: block;
    content: "";
    padding-bottom: 72.82727%;
    }
    .story__bg--team {
    /* background-image: url(/build/images/team.3c7b7305.jpg); */
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .story__bg--team {
        /* background-image: url(/build/images/team@2.ee71c45c.jpg); */
    }
    }
    .story__bg--team:before {
    display: block;
    content: "";
    padding-bottom: 89.79592%;
    }
    .story__team--wrapper {
    -ms-flex-order: 2;
    order: 2;
    }
    @media (min-width: 768px) {
    .story__content {
        max-width: none;
        padding-right: 45px;
        padding-left: 45px;
    }
    .story__title {
        font-size: 32px;
        font-size: 2rem;
        line-height: 42px;
        line-height: 2.625rem;
        text-align: left;
    }
    .story__title b {
        display: block;
    }
    .story__image {
        margin-top: 40px;
        margin-bottom: 200px;
    }
    .story__bg--big {
        max-width: 493px;
        transform: translate(-30px, -40px);
    }
    .story__bg--big,
    .story__bg--small {
        transition: transform 0.35s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .story__bg--small {
        max-width: 406px;
        transform: translate(90px, -164px);
    }
    .story__bg--team {
        max-width: 570px;
        margin: 0 auto;
        transition: transform 0.35s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    }
    @media (min-width: 992px) {
    .story__title b {
        display: inline;
    }
    .story__team--wrapper {
        -ms-flex-order: -1;
        order: -1;
    }
    .story__team--wrapper .story__image {
        margin: 0;
    }
    .story__image {
        opacity: 0;
        transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
    }
    .story__image.is-animated {
        opacity: 1;
    }
    .story__image.is-animated .story__bg--big {
        transform: translateY(-90px);
    }
    .story__image.is-animated .story__bg--small {
        transform: translateY(-230px);
    }
    .story__image.is-animated .story__bg--team {
        transform: translate(0);
    }
    .story__bg--big,
    .story__bg--small,
    .story__bg--team {
        box-shadow: 0 10px 28px 0 hsla(210, 8%, 54%, 0.2);
        transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s,
        transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
    }
    .story__bg--big {
        width: 470px;
        height: 441px;
        /* background-image: url(/build/images/story-1.fd78cad8.jpg); */
        background-size: contain;
        margin-left: auto;
        transform: translate(-30px, -40px);
    }
    }
    @media only screen and (min-width: 992px) and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min--moz-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min-resolution: 2dppx),
    only screen and (min-width: 992px) and (min-resolution: 192dpi) {
    .story__bg--big {
        /* background-image: url(/build/images/story-1@2.e53429c1.jpg); */
    }
    }
    @media (min-width: 992px) {
    .story__bg--small {
        width: 406px;
        height: 288px;
        /* background-image: url(/build/images/story-2.d3ef9e54.jpg); */
        background-size: contain;
        transform: translate(23px, -265px);
    }
    }
    @media only screen and (min-width: 992px) and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min--moz-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min-resolution: 2dppx),
    only screen and (min-width: 992px) and (min-resolution: 192dpi) {
    .story__bg--small {
        /* background-image: url(/build/images/story-2@2.ae150781.jpg); */
    }
    }
    @media (min-width: 992px) {
    .story__bg--team {
        /* background-image: url(/build/images/team.3c7b7305.jpg); */
        background-size: contain;
        width: 100%;
        height: auto;
        background-repeat: no-repeat;
        transform: translate(-50px, 50px);
    }
    }
    @media only screen and (min-width: 992px) and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min--moz-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min-device-pixel-ratio: 2),
    only screen and (min-width: 992px) and (min-resolution: 2dppx),
    only screen and (min-width: 992px) and (min-resolution: 192dpi) {
    .story__bg--team {
        /* background-image: url(/build/images/team@2.ee71c45c.jpg); */
    }
    }
    @media (min-width: 992px) {
    .story .story:before {
        top: -230px;
    }
    }
    @media (min-width: 1200px) {
    .story__bg--team {
        width: 570px;
        height: 512px;
    }
    }
    .slider__navigation {
    padding: 0;
    text-align: center;
    margin: 35px -13px 0;
    }
    .slider__navigation li {
    width: 12px;
    height: 12px;
    margin: 0 13px;
    border-radius: 50%;
    background-color: #e4e9ee;
    list-style: none;
    display: inline-block;
    transition: background-color 0.2s ease;
    }
    .slider__navigation li.is-active {
    background-color: #2b71ad;
    }
    .connect .card-plain {
    padding-bottom: 60px;
    transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    html.non-mobileDevice .connect .card-plain:hover {
    cursor: pointer;
    box-shadow: 0 20px 48px 0 hsla(210, 8%, 54%, 0.3);
    }
    .connect .card--arrow:after {
    bottom: 40px;
    }
    .connect .card__.page p br {
    display: none;
    }
    @media (min-width: 768px) {
    .connect .card__.page p br {
        display: block;
    }
    }
    .achieved {
    margin-bottom: 130px;
    }
    .achieved__heading {
    margin-top: 50px;
    font-weight: 600;
    }
    .achieved__item {
    -ms-flex: 1 1 25%;
    flex: 1 1 25%;
    opacity: 1;
    transform: translateX(-10px);
    }
    .achieved__item:before {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin: 0 auto;
    }
    .achieved__item-wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 35px;
    -ms-flex-direction: column;
    flex-direction: column;
    }
    .achieved__item--launchpad {
    position: relative;
    }
    .achieved__item--launchpad:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/google.1eb52831.png); */
    background-size: auto auto;
    width: 226px;
    height: 68px;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .achieved__item--launchpad:before {
        /* background-image: url(/build/images/google@2.3b962a76.png); */
    }
    }
    .achieved__item--xelebrate {
    position: relative;
    }
    .achieved__item--xelebrate:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/wexelerate.7ad29ea9.png); */
    background-size: auto auto;
    width: 250px;
    height: 70px;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .achieved__item--xelebrate:before {
        /* background-image: url(/build/images/wexelerate@2.41f8e21b.png); */
    }
    }
    .achieved__item--deloitte {
    position: relative;
    }
    .achieved__item--deloitte:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/deloitte.834c2303.png); */
    background-size: auto auto;
    width: 203px;
    height: 52px;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .achieved__item--deloitte:before {
        /* background-image: url(/build/images/deloitte@2.977cf211.png); */
    }
    }
    .achieved__item--cs {
    position: relative;
    }
    .achieved__item--cs:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/cs.cc314c6a.jpg); */
    background-size: auto auto;
    width: 300px;
    height: 84px;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .achieved__item--cs:before {
        /* background-image: url(/build/images/cs@2.14027370.jpg); */
    }
    }
    .achieved__item--mobile {
    position: relative;
    }
    .achieved__item--mobile:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/ux.f65ac84a.jpg); */
    background-size: auto auto;
    width: 217px;
    height: 112px;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .achieved__item--mobile:before {
        /* background-image: url(/build/images/ux@2.441eb1b3.jpg); */
    }
    }
    .achieved__item--fintech {
    position: relative;
    }
    .achieved__item--fintech:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/fintecheurope.dddffad4.png); */
    background-size: auto auto;
    width: 223px;
    height: 118px;
    background-size: contain;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx),
    only screen and (min-resolution: 192dpi) {
    .achieved__item--fintech:before {
        /* background-image: url(/build/images/fintecheurope@2.b40e58e1.png); */
    }
    }
    .achieved__item--rating {
    position: relative;
    }
    .achieved__item--rating:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/rating.836d042f.svg); */
    background-size: auto auto;
    width: 203px;
    height: 86px;
    background-size: contain;
    }
    .achieved__item--apps {
    position: relative;
    }
    .achieved__item--apps:before {
    display: block;
    content: "";
    /* background-image: url(/build/images/apps.4177145e.svg); */
    background-size: auto auto;
    width: 270px;
    height: 111px;
    }
    @media (min-width: 768px) {
    .achieved__item {
        opacity: 0;
    }
    .achieved__heading {
        margin-top: 100px;
    }
    }
    @media (min-width: 992px) {
    .achieved__item-wrapper {
        -ms-flex-direction: row;
        flex-direction: row;
    }
    }
    .features {
    margin-top: 70px;
    }
    .features__title {
    margin-bottom: 76px;
    text-align: center;
    }
    .features__title b {
    display: inline-block;
    }
    .features__cards [class^="col-"]:last-child .card {
    margin-bottom: 20px;
    }
    .features .card-feature {
    margin-bottom: 45px;
    }
    .features .card__head-icon + .card__.page {
    margin-top: 32px;
    }
    @media (min-width: 768px) {
    .features {
        margin-top: 52px;
    }
    .features__cards {
        margin-top: 93px;
    }
    .features__title {
        margin-bottom: 0;
    }
    .features__title b {
        display: block;
    }
    .features .card-feature {
        margin-bottom: 55px;
        padding-left: 0;
        padding-right: 0;
        max-width: 300px;
    }
    .features .card-feature .card__head-icon {
        left: 0;
    }
    }
    @media (min-width: 992px) {
    .features {
        margin-top: 115px;
    }
    .features .circle:before {
        content: "";
        right: -595px;
        top: 227px;
    }
    .features__title b {
        display: inline-block;
    }
    .features__cards {
        margin-top: 100px;
    }
    .features .circle:before {
        display: block;
        right: -700px;
    }
    }
    @media (min-width: 1200px) {
    .features .circle:before {
        right: -850px;
    }
    }
    .security {
    margin-top: 100px;
    }
    .security__title {
    text-align: center;
    }
    .security__card {
    max-width: 810px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    }
    .security__card .card__title {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1;
    }
    .security__card .card__title span {
    margin-bottom: 5px;
    margin-left: 10px;
    }
    .security__card .card__title svg {
    width: 40px;
    height: 40px;
    margin-left: -10px;
    }
    .security__card .card__.page p + p {
    margin-top: 25px;
    }
    .write-us {
    margin-top: 120px;
    }
    .write-us__title {
    text-align: center;
    margin-bottom: 45px;
    }
    .write-us__copyright,
    .write-us__item {
    color: #6c767f;
    }
    .write-us p {
    position: relative;
    z-index: 100;
    }
    .write-us__item {
    margin-bottom: 34px;
    }
    .write-us__item .label {
    display: block;
    font-weight: 600;
    line-height: 2em;
    }
    .write-us__item .label span {
    font-weight: 400;
    }
    .write-us__item a {
    text-decoration: underline;
    color: inherit;
    font-weight: 400;
    }
    .write-us__item a:hover {
    text-decoration: none;
    }
    .write-us__copyright {
    line-height: 2em;
    margin-bottom: 100px;
    }
    @media (min-width: 768px) {
    .write-us form {
        max-width: 520px;
        margin: 0 auto;
    }
    }
    .time {
    position: absolute;
    width: 35px;
    top: 23px;
    left: 32px;
    background: #fff;
    font-size: 9px;
    text-align: left;
    font-weight: 500;
    }
    .time span {
    display: inline-block;
    width: 5px;
    text-align: center;
    }
    .expenses {
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 0.2s;
    }
    .expenses p {
    font-size: 12px;
    color: #667d89;
    }
    .expenses p span {
    color: #000;
    display: block;
    font-size: 14px;
    margin-bottom: 0;
    opacity: 0;
    transition: all 0.3s ease;
    }
    .expenses.is-animated {
    top: 95px;
    opacity: 1;
    }
    .expenses.is-animated p span {
    opacity: 1;
    margin-bottom: -5px;
    transition-delay: 0.2s;
    }
    .expenses__aditional {
    position: absolute;
    width: calc(100% - 60px);
    left: 30px;
    top: 320px;
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 0.3s;
    }
    .expenses__aditional p {
    font-size: 12px;
    color: #667d89;
    text-align: center;
    width: 100%;
    }
    .expenses__aditional p span {
    color: #000;
    display: block;
    font-size: 14px;
    margin-bottom: 0;
    transition: all 0.3s ease;
    }
    .expenses__aditional--border {
    border-right: 1px solid #e3ecf1;
    }
    .expenses__aditional.is-animated {
    top: 330px;
    opacity: 1;
    }
    .expenses__aditional.is-animated p span {
    opacity: 1;
    margin-bottom: -5px;
    transition-delay: 0.2s;
    }
    .info {
    position: absolute;
    width: calc(100% - 60px);
    left: 30px;
    top: 400px;
    height: 58px;
    overflow: hidden;
    }
    .info .row {
    -ms-flex-align: center !important;
    align-items: center !important;
    }
    .info__content {
    width: 100%;
    padding: 0;
    margin: 0;
    top: -10px;
    opacity: 0;
    position: relative;
    transition: all 0.3s ease;
    transition-delay: 0.4s;
    }
    .info__content:last-child {
    margin-top: -15px;
    transition-delay: 0.45s;
    }
    .info__content div[class^="col"] {
    padding: 0;
    margin: 0;
    }
    .info__content p {
    font-size: 11px;
    color: #000;
    text-align: left;
    width: 100%;
    line-height: 1.2;
    }
    .info__content p span {
    color: #667d89;
    display: block;
    font-size: 10px;
    margin-bottom: 0;
    transition: all 0.3s ease;
    }
    .info__content p.info__content--minus {
    text-align: right;
    color: #fb6666;
    }
    .info__content--icon {
    width: 28px;
    height: 28px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: -22px;
    left: 0;
    }
    .info__content--icon svg {
    width: 15px;
    height: 15px;
    margin-top: 6px;
    }
    .info__content--icon.pink {
    background: #f964a0;
    }
    .info__content--icon.blue {
    background: #1eadcf;
    }
    .info.is-animated .info__content {
    top: 0;
    opacity: 1;
    }
    .piechart {
    position: absolute;
    top: 100px;
    left: 25px;
    width: 220px;
    height: 400px;
    transform-origin: 50% 50%;
    transform: scale(0.78);
    }
    .piechart [class^="pie"] {
    stroke-width: 58;
    fill: none;
    transition: all 0.45s ease;
    }
    .piechart .pie-1 {
    stroke-dasharray: 0 628.32;
    stroke-dashoffset: 560;
    stroke: #feb100;
    transition-delay: 10ms;
    }
    .piechart .pie-2 {
    stroke-dasharray: 0 628.32;
    stroke-dashoffset: 590;
    stroke: #1eadcf;
    transition-delay: 10ms;
    }
    .piechart .pie-3 {
    stroke-dasharray: 0 628.32;
    stroke-dashoffset: 650;
    stroke: #f6534b;
    transition-delay: 10ms;
    }
    .piechart .pie-4 {
    stroke-dasharray: 0 628.32;
    stroke-dashoffset: 0;
    stroke: #17b171;
    transition-delay: 10ms;
    }
    .piechart .pie-5 {
    stroke-dasharray: 0 628.32;
    stroke-dashoffset: 75;
    stroke: #fccd01;
    transition-delay: 10ms;
    }
    .piechart .pie-6 {
    stroke-dasharray: 0 628.32;
    stroke-dashoffset: 264;
    stroke: #f964a0;
    transition-delay: 10ms;
    }
    .piechart .pie-1 {
    stroke-dasharray: 208 628.32;
    }
    .piechart .pie-2 {
    stroke-dasharray: 140 628.32;
    }
    .piechart .pie-3 {
    stroke-dasharray: 105 628.32;
    }
    .piechart .pie-4 {
    stroke-dasharray: 85 628.32;
    }
    .piechart .pie-5 {
    stroke-dasharray: 50 628.32;
    }
    .piechart .pie-6 {
    stroke-dasharray: 120 628.32;
    }
    .piechart .pie-white {
    strokeWidth: 70;
    stroke-dashoffset: 0;
    stroke: #fff;
    transition-delay: 10ms;
    transition: all 0.7s ease;
    transform: rotateX(180deg) translateY(-395px);
    }
    .piechart [class^="circle"] {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 0.3s ease;
    opacity: 0;
    }
    .piechart [class^="circle"] svg {
    width: 15px;
    height: 15px;
    margin-top: 7px;
    }
    .piechart [class^="circle"] p {
    position: absolute;
    font-size: 12px;
    opacity: 0;
    top: 3px;
    transition: all 0.3s ease;
    }
    .piechart [class^="circle"]:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 1px;
    transform-origin: 0 0;
    z-index: -1;
    }
    .piechart .circle-1 {
    background: #feb100;
    top: 10px;
    left: 10px;
    }
    .piechart .circle-1 p {
    color: #feb100;
    left: -30px;
    }
    .piechart .circle-1:before {
    background: #feb100;
    top: 20px;
    left: 20px;
    transform: rotate(45deg);
    }
    .piechart .circle-2 {
    background: #1eadcf;
    top: 150px;
    left: 5px;
    }
    .piechart .circle-2 p {
    color: #1eadcf;
    left: -30px;
    }
    .piechart .circle-2:before {
    background: #1eadcf;
    top: 20px;
    left: 10px;
    transform: rotate(-40deg);
    }
    .piechart .circle-3 {
    background: #f6534b;
    top: 180px;
    left: 110px;
    }
    .piechart .circle-3 p {
    color: #f6534b;
    left: 32px;
    }
    .piechart .circle-3:before {
    background: #f6534b;
    top: -20px;
    left: 8px;
    transform: rotate(78deg);
    }
    .piechart .circle-4 {
    background: #17b171;
    top: 130px;
    left: 180px;
    }
    .piechart .circle-4 p {
    color: #17b171;
    left: 33px;
    }
    .piechart .circle-4:before {
    background: #17b171;
    top: 18px;
    left: 20px;
    transform: rotate(-156deg);
    }
    .piechart .circle-5 {
    background: #fccd01;
    top: 65px;
    left: 185px;
    }
    .piechart .circle-5 p {
    color: #fccd01;
    left: 34px;
    }
    .piechart .circle-5:before {
    background: #fccd01;
    top: 15px;
    left: 20px;
    transform: rotate(-184deg);
    }
    .piechart .circle-6 {
    background: #f964a0;
    top: 10px;
    left: 160px;
    }
    .piechart .circle-6 p {
    color: #f964a0;
    left: 34px;
    }
    .piechart .circle-6:before {
    background: #f964a0;
    top: 20px;
    left: 12px;
    transform: rotate(135deg);
    }
    .piechart .shadow {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 5px solid #000;
    z-index: 3;
    top: 58px;
    left: 62px;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease;
    transition-delay: 0.3s;
    }
    .piechart.is-animated .pie-white {
    stroke-dashoffset: 800;
    stroke-dasharray: 800;
    }
    .piechart.is-animated .shadow {
    opacity: 0.2;
    }
    .piechart.is-animated [class^="circle"] {
    opacity: 1;
    }
    .piechart.is-animated .circle-1 {
    top: 20px;
    left: 20px;
    transition-delay: 50ms;
    }
    .piechart.is-animated .circle-1 p {
    top: 5px;
    opacity: 1;
    transition-delay: 0.2s;
    }
    .piechart.is-animated .circle-2 {
    top: 140px;
    left: 15px;
    transition-delay: 0.1s;
    }
    .piechart.is-animated .circle-2 p {
    top: 6px;
    opacity: 1;
    transition-delay: 0.25s;
    }
    .piechart.is-animated .circle-3 {
    top: 170px;
    left: 105px;
    transition-delay: 0.15s;
    }
    .piechart.is-animated .circle-3 p {
    top: 6px;
    opacity: 1;
    transition-delay: 0.3s;
    }
    .piechart.is-animated .circle-4 {
    top: 120px;
    left: 170px;
    transition-delay: 0.2s;
    }
    .piechart.is-animated .circle-4 p {
    top: 6px;
    opacity: 1;
    transition-delay: 0.35s;
    }
    .piechart.is-animated .circle-5 {
    top: 75px;
    left: 175px;
    transition-delay: 0.25s;
    }
    .piechart.is-animated .circle-5 p {
    top: 6px;
    opacity: 1;
    transition-delay: 0.4s;
    }
    .piechart.is-animated .circle-6 {
    top: 20px;
    left: 150px;
    transition-delay: 0.3s;
    }
    .piechart.is-animated .circle-6 p {
    top: 6px;
    opacity: 1;
    transition-delay: 0.45s;
    }
    .visual__image--desktop,
    .visual__image--iphone,
    .visual__image--samsung {
    top: 20px;
    opacity: 0;
    transition: all 0.5s ease;
    }
    .visual__image--desktop.is-animated,
    .visual__image--iphone.is-animated,
    .visual__image--samsung.is-animated {
    top: 0;
    opacity: 1;
    }
    .visual__image--iphone {
    top: 0;
    left: 40px !important;
    }
    .visual__image--iphone.is-animated {
    left: 0 !important;
    }
    .visual__image--samsung {
    transition-delay: 0.2s;
    left: 80px !important;
    }
    .visual__image--samsung.is-animated {
    left: 40px !important;
    top: 20px;
    }
    .visual__image--desktop {
    transition-delay: 0.4s;
    left: calc(40% + 40px) !important;
    }
    .visual__image--desktop.is-animated {
    left: 40% !important;
    top: 20px;
    }
    @media (max-width: 991.98px) {
    .visual__image--samsung {
        left: -60px !important;
    }
    .visual__image--samsung.is-animated {
        left: -100px !important;
    }
    .visual__image--desktop.is-animated {
        left: 30% !important;
    }
    }
    .graph {
    position: absolute;
    top: 100px;
    opacity: 0;
    width: calc(100% - 30px);
    height: calc(100% - 200px);
    left: 15px;
    transition: all 0.5s ease;
    transition-delay: 0.15s;
    }
    .graph svg {
    position: relative;
    top: -82px;
    left: -8px;
    width: calc(100% + 16px);
    }
    .graph svg circle {
    transition: all 0.8s ease;
    }
    .graph svg circle.stt0 {
    fill: none;
    stroke: #fff;
    strokeWidth: 40;
    stroke-dashoffset: 0;
    stroke-dasharray: 400;
    }
    .graph svg circle.stt01,
    .graph svg circle.stt02 {
    transform: translateY(54px) rotateX(180deg);
    }
    .graph svg circle.stt01 {
    transition-delay: 0.1s;
    }
    .graph svg circle.stt02 {
    transition-delay: 0.3s;
    }
    .graph svg rect {
    transform-origin: 0 50%;
    transform: translate(0);
    height: 0;
    transition: all 0.3s ease;
    }
    .graph svg rect.r2 {
    transition-delay: 50ms;
    }
    .graph svg rect.r3 {
    transition-delay: 0.1s;
    }
    .graph svg rect.r4 {
    transition-delay: 0.15s;
    }
    .graph svg rect.r5 {
    transition-delay: 0.2s;
    }
    .graph svg rect.r6 {
    transition-delay: 0.25s;
    }
    .graph svg rect.r7 {
    transition-delay: 0.3s;
    }
    .graph svg rect.r8 {
    transition-delay: 0.35s;
    }
    .graph svg rect.g1 {
    transform: translateY(52px);
    transition-delay: 0.4s;
    }
    .graph svg rect.r9 {
    transition-delay: 0.45s;
    }
    .graph svg rect.r10 {
    transition-delay: 0.5s;
    }
    .graph svg rect.r11 {
    transition-delay: 0.55s;
    }
    .graph svg rect.r12 {
    transition-delay: 0.65s;
    }
    .graph.is-animated {
    top: 110px;
    opacity: 1;
    }
    .graph.is-animated svg circle.stt0 {
    stroke-dashoffset: 400;
    }
    .graph.is-animated svg rect {
    transform: translate(0);
    }
    .graph.is-animated svg rect.r1 {
    height: 33px;
    }
    .graph.is-animated svg rect.r2 {
    height: 66px;
    }
    .graph.is-animated svg rect.r3 {
    height: 33px;
    }
    .graph.is-animated svg rect.r4 {
    height: 78px;
    }
    .graph.is-animated svg rect.r5 {
    height: 30px;
    }
    .graph.is-animated svg rect.r6 {
    height: 33px;
    }
    .graph.is-animated svg rect.r7 {
    height: 15px;
    }
    .graph.is-animated svg rect.r8 {
    height: 62px;
    }
    .graph.is-animated svg rect.g1 {
    height: 52px;
    }
    .graph.is-animated svg rect.r9 {
    height: 36px;
    }
    .graph.is-animated svg rect.r10 {
    height: 11px;
    }
    .graph.is-animated svg rect.r11 {
    height: 19px;
    }
    .graph.is-animated svg rect.r12 {
    height: 62px;
    }
    .big-graph {
    position: absolute;
    top: 90px;
    left: 120px;
    width: calc(100% - 240px);
    height: calc(100% - 165px);
    overflow: hidden;
    background: transparent;
    opacity: 1;
    transition: all 0.5s ease;
    transition-delay: 0.15s;
    }
    .big-graph svg {
    transition: all 0.3s ease;
    transition-delay: 0.3s;
    opacity: 0;
    }
    .big-graph svg rect {
    fill: #ffb62a;
    transform-origin: 0 0;
    transition: all 0.5s ease;
    }
    .big-graph svg rect.st9 {
    transform: translateY(54.2px);
    height: 0;
    }
    .big-graph svg rect.st10 {
    transform: translateY(109.2px);
    height: 0;
    transition-delay: 0.1s;
    }
    .big-graph svg rect.st11 {
    transform: translateY(85.2px);
    height: 0;
    transition-delay: 0.2s;
    }
    .big-graph svg rect.st12 {
    transform: translateY(55.2px);
    height: 0;
    transition-delay: 0.3s;
    }
    .big-graph svg rect.st13 {
    transform: translateY(254.2px);
    height: 0;
    transition-delay: 0.4s;
    }
    .big-graph svg rect.st14 {
    transform: translateY(86.2px);
    height: 0;
    transition-delay: 0.5s;
    }
    .big-graph svg rect.st15 {
    transform: translateY(153.2px);
    height: 0;
    transition-delay: 0.6s;
    }
    .big-graph svg rect.st16 {
    transform: translateY(192.2px);
    height: 0;
    transition-delay: 0.7s;
    }
    .big-graph svg rect.st17 {
    transform: translateY(43.2px);
    height: 0;
    transition-delay: 0.8s;
    }
    .big-graph svg rect.st18 {
    transform: translateY(109.2px);
    height: 0;
    transition-delay: 0.9s;
    }
    .big-graph svg .big-graph-second-part {
    transition: all 0.5s ease;
    transition-delay: 0.2s;
    transform: translateY(20px);
    }
    .big-graph svg .big-graph-second-part.moved {
    transform: translate(140px, 100px);
    }
    .big-graph svg .big-graph-second-part#map {
    transform: translateY(80px);
    }
    .big-graph svg .big-graph-second-part#graph {
    transform: translate(6px, 88px);
    }
    .big-graph svg .second-big-graph {
    transition: all 1s ease;
    transition-delay: 0.6s;
    transform: translateY(100px);
    }
    .big-graph.is-animated svg {
    opacity: 1;
    }
    .big-graph.is-animated svg rect {
    transform: translate(0);
    }
    .big-graph.is-animated svg rect.st9 {
    height: 54.2px;
    }
    .big-graph.is-animated svg rect.st10 {
    height: 109.2px;
    }
    .big-graph.is-animated svg rect.st11 {
    height: 85.2px;
    }
    .big-graph.is-animated svg rect.st12 {
    height: 55.2px;
    }
    .big-graph.is-animated svg rect.st13 {
    height: 254.2px;
    }
    .big-graph.is-animated svg rect.st14 {
    height: 86.2px;
    }
    .big-graph.is-animated svg rect.st15 {
    height: 153.2px;
    }
    .big-graph.is-animated svg rect.st16 {
    height: 192.2px;
    }
    .big-graph.is-animated svg rect.st17 {
    height: 43.2px;
    }
    .big-graph.is-animated svg rect.st18 {
    height: 109.2px;
    }
    .big-graph.is-animated svg .big-graph-second-part {
    transform: translate(0);
    }
    .big-graph.is-animated svg .big-graph-second-part.moved {
    transform: translate(140px, 80px);
    }
    .big-graph.is-animated svg .big-graph-second-part#map {
    transform: translateY(60px);
    }
    .big-graph.is-animated svg .big-graph-second-part#graph {
    transform: translate(6px, 68px);
    }
    .big-graph.is-animated svg .second-big-graph {
    transform: translate(0);
    }
    @media (min-width: 992px) {
    .svg-graph__mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        transform: translateX(0);
        transition: all 1s ease-in-out;
    }
    .svg-graph__mask.is-animated {
        transform: translateX(100%);
    }
    }
    @media (min-width: 992px) {
    .shape__step-box.card-wallet__wrapper.is-animated .card-wallet {
        height: 244px;
    }
    .shape__step-box.card-wallet__wrapper.is-animated .card-wallet:first-child,
    .shape__step-box.card-wallet__wrapper.is-animated .card-wallet:nth-child(2) {
        transform: translate(-50%, 30%);
    }
    .shape__step-box.card-wallet__wrapper.is-animated .card-wallet:nth-child(3) {
        transform: translateY(30%);
    }
    }
    .wrote-news {
    margin-bottom: 65px;
    }
    .wrote-news__wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 44px;
    }
    .wrote-news__item {
    display: -ms-flexbox;
    display: flex;
    padding: 22px 0;
    }
    @media (min-width: 768px) {
    .wrote-news {
        margin-bottom: 50px;
    }
    .wrote-news__wrapper {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 24px;
    }
    .wrote-news__item {
        margin-left: 14px;
        margin-right: 14px;
    }
    }
    @media (min-width: 1200px) {
    .wrote-news {
        margin-bottom: 140px;
    }
    .wrote-news__wrapper {
        -ms-flex-direction: row;
        flex-direction: row;
    }
    }
    .contact-form__title {
    text-align: center;
    margin-bottom: 32px;
    }
    .contact-form__title b {
    display: inline-block;
    width: 100%;
    }
    .contact-form .form-group {
    margin-bottom: 16px;
    }
    .contact-form .button {
    margin-top: 16px;
    }
    .control-budget {
    margin-top: 70px;
    }
    @media (min-width: 768px) {
    .control-budget__cards .card {
        max-width: 337px;
    }
    .control-budget__cards [class^="col-"]:first-of-type .card {
        margin-left: 0;
    }
    .control-budget__cards [class^="col-"]:nth-of-type(2) .card {
        margin-right: 0;
    }
    .control-budget__cards [class^="col-"]:last-of-type {
        margin-top: 70px;
    }
    }
    @media (min-width: 992px) {
    .control-budget__cards [class^="col-"]:last-of-type {
        margin-top: 0;
    }
    }
    @media (max-width: 991.98px) {
    .page--404 .visual__title {
        font-size: 25px;
    }
    .page--404 .visual__perex {
        font-size: 14px;
    }
    }
    .page--404 .visual {
    position: relative;
    min-height: calc(100vh - 86px);
    }
    .page--404 .visual__content {
    position: relative;
    z-index: 10;
    }
    .page--404 .visual__title {
    text-align: center;
    margin-bottom: 35px;
    }
    .page--404 .visual__perex {
    max-width: 397px;
    margin: 0 auto;
    line-height: 2;
    color: #6c767f;
    }
    .page--404 .visual__return {
    max-width: 300px;
    display: block;
    margin: 40px auto 0;
    }
    @media (min-width: 992px) {
    .page--404 .visual:before {
        position: absolute;
        top: auto;
        left: -400px;
        right: 0;
        bottom: -400px;
        width: 1000px;
        height: 1000px;
        content: "";
        background: url(assets/images/visitor/modal-bg.6ba7d9cc.svg) no-repeat;
        background-size: contain;
        background-position: 100%;
    }
    .page--404 .visual:after {
        position: absolute;
        top: 0;
        right: 0;
        left: auto;
        bottom: auto;
        width: 900px;
        height: 900px;
        content: "";
        // /* background: url(../../build/images/green-big.cad7f16d.svg) no-repeat; */
        background-size: contain;
        background-position: 100%;
    }
    }
    .page--about .visual:before {
    right: -655px;
    }
    .page--about .visual__title {
    text-align: center;
    margin-bottom: 50px;
    }
    .page--about .story.circle.grey.small:before {
    top: 550px;
    }
    @media (min-width: 768px) {
    .page--about__title {
        margin-bottom: 280px;
    }
    }
    @media (min-width: 992px) {
    .page--about .visual {
        margin-bottom: 125px;
    }
    .page--about .visual:before {
        right: -441px;
    }
    .page--about .visual__title {
        margin-bottom: 50px;
    }
    }
    .page--wsw .visual {
    z-index: 10;
    }
    .page--wsw .visual__content {
    margin: 0;
    }
    .page--wsw .visual__title {
    margin-bottom: 50px;
    }
    .page--wsw .wsw {
    margin-top: 48px;
    }
    .page--wsw .wsw__subheading {
    font-size: 16px;
    font-size: 1rem;
    line-height: 32px;
    line-height: 2rem;
    }
    .page--wsw .wsw__subheading br {
    display: none;
    }
    .page--wsw .footer {
    position: relative;
    z-index: 100;
    }
    .page--connection .bank-disclaimer {
    color: #c6ced6;
    font-size: 0.75rem;
    }
    .page--connection .visual {
    margin-bottom: 50px;
    }
    .page--connection .visual.circle:before {
    content: none;
    }
    .page--connection .visual__subtitle {
    text-align: center;
    margin: 40px 0 49px;
    font-weight: 600;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 32px;
    line-height: 2rem;
    }
    .page--connection .visual__shape {
    left: 77%;
    }
    .page--connection .connect.circle:before {
    content: none;
    }
    @media (min-width: 768px) {
    .page--connection .connect {
        margin-top: 10px;
    }
    .page--connection .connect .card__title {
        font-size: 32px;
        font-size: 2rem;
        line-height: 42px;
        line-height: 2.625rem;
    }
    .page--connection .security {
        padding-top: 87px;
        margin-top: 0;
    }
    .page--connection .security__title {
        margin-bottom: 30px;
    }
    .page--connection .security__card .icon {
        font-size: 28px;
        margin-left: 0;
    }
    .page--connection .security .circle:before {
        content: none;
    }
    .page--connection .free .card__title {
        font-size: 32px;
        font-size: 2rem;
        line-height: 42px;
        line-height: 2.625rem;
    }
    .page--connection .free .button {
        margin-top: 46px;
    }
    }
    @media (min-width: 992px) {
    .page--connection .bank-disclaimer {
        padding-left: 45px;
        padding-right: 45px;
    }
    .page--connection .connect.circle:before {
        content: "";
    }
    .page--connection .visual.circle:before {
        content: "";
        right: -500px;
        top: -25px;
    }
    .page--connection .visual__subtitle {
        margin-top: 80px;
        margin-bottom: 39px;
    }
    .page--connection .banks {
        margin-top: 115px;
    }
    .page--connection .banks__country-title {
        margin-bottom: 45px;
    }
    .page--connection .banks form {
        margin-bottom: 60px;
    }
    .page--connection .security {
        padding-top: 107px;
        margin-top: 0;
    }
    .page--connection .security .circle:before {
        content: "";
    }
    }

    .stt0 {
    fill: #FFFFFF;
    }

    .stt1 {
    fill: #B2BABF;
    }

    .stt2 {
    fill: none;
    stroke: #E2E6E9;
    strokeWidth: 0.5;
    stroke-linecap: square;
    }

    .stt3 {
    fill: none;
    stroke: #A1B4BE;
    strokeWidth: 0.5;
    stroke-linecap: square;
    }

    .stt4 {
    fill: #FB6666;
    }

    .stt5 {
    fill: #422AFB
;
    }

    .stt6 {
    fill: #F9FAFB;
    }

    .stt7 {
    fill: #91999F;
    }

    .stt8 {
    fill: #F26869;
    }

    .stt9 {
    fill: none;
    stroke: #E2E6E9;
    stroke-linecap: square;
    }

    .stt10 {
    fill: #5EC4AC;
    }

    .stt11 {
    fill: none;
    }

    .stt12 {
    fill: #6E8FB2;
    }

    .stt13 {
    fillOpacity: 9.000000e-02;
    }

    .stt14 { 
    fill: #2A3E49;
    }

    .stt15 {
    fill: #15B272;
    }

    .stt16 {
    fill: #D8D8D8;
    fillOpacity: 0.9;
    }

    .stt17 {
    fill: #40C3F9;
    }

    .stt18 {
    fill: #FE5A61;
    }

    .stt19 {
    fill: #00BC7C;
    }

    .stt20 {
    fill: #FF6FAF;
    }

    .stt21 {
    fill: #FFC053;
    }

    .stt22 {
    fill: #F16667;
    }

    .st0 {
    fill: #FFFFFF;
    }

    .st1 {
    fill: #93A1AA;
    }

    .st2 {
    font-family: 'ProximaNovaA-Regular';
    }

    .st3 {
    font-size: 12px;
    }

    .st4 {
    fill: #FF8CD7;
    }

    .st5 {
    enable-background: new;
    }

    .st6 {
    fill: #ED6854;
    }

    .st7 {
    fill: #FFBD32;
    }

    .st8 {
    fill: none;
    stroke: #E8EEF2;
    strokeWidth: 0.5;
    stroke-linecap: square;
    }

    .st9 {
    fill: #FB6666;
    }

    .st10 {
    fill: #324C5B;
    }

    .st11 {
    font-size: 14px;
    }

    .st12 {
    fill: #EFEFEF;
    }

    .st13 {
    fill: #FEFEFE;
    }

    .st14 {
    fill: #F8F3E6;
    }

    .st15 {
    fill: #FBF4E4;
    }

    .st16 {
    fill: #C8E9B3;
    }

    .st17 {
    fill: #FCF1B6;
    }

    .st18 {
    fill: #E2E2E2;
    }

    .st19 {
    fill: #FCFCFC;
    }

    .st20 {
    fill: #F0CF77;
    }

    .st21 {
    fill: #E5E5E5;
    }

    .st22 {
    fill: #F5F5F5;
    }

    .st23 {
    fill: #F8F6F1;
    }

    .st24 {
    fill: #FDFDFD;
    }

    .st25 {
    fill: #F3F2F0;
    }

    .st26 {
    fill: #E1F2D8;
    }

    .st27 {
    fill: #F0D079;
    }

    .st28 {
    fill: #F9F6F1;
    }

    .st29 {
    fill: #F0CF78;
    }

    .st30 {
    fill: #E6E6E6;
    }

    .st31 {
    fill: #E3E3E3;
    }

    .st32 {
    fill: #F4F3F0;
    }

    .st33 {
    fill: #C9E9B4;
    }

    .st34 {
    fill: #D7D9DC;
    }

    .st35 {
    fill: #F5FAF4;
    }

    .st36 {
    fill: #DDF0D2;
    }

    .st37 {
    fill: #FAFAFA;
    }

    .st38 {
    fill: #E4E4E4;
    }

    .st39 {
    fill: #8E9294;
    }

    .st40 {
    fill: #F8F9F9;
    }

    .st41 {
    fill: #A6CDA5;
    }

    .st42 {
    fill: #747C80;
    }

    .st43 {
    fill: #A6A9AA;
    }

    .st44 {
    fill: #95989A;
    }

    .st45 {
    fill: #9A9D9F;
    }

    .st46 {
    fill: #9EA2A3;
    }

    .st47 {
    fill: #C6E5B5;
    }

    .st48 {
    fill: #CCEAB8;
    }

    .st49 {
    fill: #95999A;
    }

    .st50 {
    fill: #898D8F;
    }

    .st51 {
    fill: #F9F9FA;
    }

    .st52 {
    fill: #949799;
    }

    .st53 {
    fill: #95C794;
    }

    .st54 {
    fill: #F9F9F9;
    }

    .st55 {
    fill: #A7CDA6;
    }

    .st56 {
    fill: #888C8E;
    }

    .st57 {
    fill: #AACFA9;
    }

    .st58 {
    fill: #F1F2F3;
    }

    .st59 {
    fill: #9B9E9F;
    }

    .st60 {
    fill: #ECEFF2;
    }

    .st61 {
    fill: #919597;
    }

    .st62 {
    fill: #578D49;
    }

    .st63 {
    fill: #F0F1F1;
    }

    .st64 {
    fill: #D6EEC7;
    }

    .st65 {
    fill: #929597;
    }

    .st66 {
    fill: #F4F4F5;
    }

    .st67 {
    fill: #F7F8F8;
    }

    .st68 {
    fill: #F0F3F6;
    }

    .st69 {
    fill: #F3F3F3;
    }

    .st70 {
    fill: #ADB0B2;
    }

    .st71 {
    fill: #939698;
    }

    .st72 {
    fill: #D5D8DB;
    }

    .st73 {
    fill: #53BBF8;
    }

    .st74 {
    fill: #F5F5F4;
    }

    .st75 {
    fill: #D7DADD;
    }

    .st76 {
    fill: #E1F0D8;
    }

    .st77 {
    fill: #E1E1E1;
    }

    .st78 {
    fill: #F4F5F5;
    }

    .st79 {
    fill: #F8F8F9;
    }

    .st80 {
    fill: #D8DBDD;
    }

    .st81 {
    fill: #E2F3D8;
    }

    .st82 {
    fill: #727A7E;
    }

    .st83 {
    fill: #717A7E;
    }

    .st84 {
    fill: #F8F5F0;
    }

    .st85 {
    fill: #747D80;
    }

    .st86 {
    fill: #939798;
    }

    .st87 {
    fill: #9DA0A2;
    }

    .st88 {
    fill: #95999B;
    }

    .st89 {
    fill: #A7CDA7;
    }

    .st90 {
    fill: #949899;
    }

    .st91 {
    fill: #EFF0F1;
    }

    .st92 {
    fill: #9C9FA1;
    }

    .st93 {
    fill: #F9F7F2;
    }

    .st94 {
    fill: #F1F2F2;
    }

    .st95 {
    fill: #EFEEEE;
    }

    .st96 {
    fill: #F4F4F4;
    }

    .st97 {
    fill: #DDDEDF;
    }

    .st98 {
    fill: #80878B;
    }

    .st99 {
    fill: #B4B7B8;
    }

    .st100 {
    fill: #FBF8F1;
    }

    .st101 {
    fill: #F5F4F0;
    }

    .st102 {
    fill: #F8F5EF;
    }

    .st103 {
    fill: #F4F2EF;
    }

    .st104 {
    fill: #F0F0F0;
    }

    .st105 {
    fill: #D2ECC2;
    }

    .st106 {
    fill: #D0ECBF;
    }

    .st107 {
    fill: #ECEFF1;
    }

    .st108 {
    fill: #F3F4F4;
    }

    .st109 {
    fill: #ABCFAB;
    }

    .st110 {
    fill: #D6D9DC;
    }

    .st111 {
    fill: #E2E2E1;
    }

    .st112 {
    fill: #E8E9E8;
    }

    .st113 {
    fill: #A9CEA8;
    }

    .st114 {
    fill: #D0ECC0;
    }

    .st115 {
    fill: #E2E2E3;
    }

    .st116 {
    fill: #6E777B;
    }

    .st117 {
    fill: #FBF3D3;
    }

    .st118 {
    fill: #EFD07A;
    }

    .st119 {
    fill: #E1E3E0;
    }

    .st120 {
    fill: #76461C;
    }

    .st121 {
    fill: #D7DADC;
    }

    .st122 {
    fill: #EAEBEB;
    }

    .st123 {
    fill: #D1ECC0;
    }

    .st124 {
    fill: #D8DADD;
    }

    .st125 {
    fill: #EFD17B;
    }

    .st126 {
    fill: #EAEAE8;
    }

    .st127 {
    fill: #E3E3E2;
    }

    .st128 {
    fill: #D0EBBE;
    }

    .st129 {
    fill: #8F9395;
    }

    .st130 {
    fill: #F6F6F6;
    }

    .st131 {
    fill: #ACCFAC;
    }

    .st132 {
    fill: #A8CEA8;
    }

    .st133 {
    fill: #AACEA9;
    }

    .st134 {
    fill: #979A9C;
    }

    .st135 {
    fill: #979B9C;
    }

    .st136 {
    fill: #AED0AE;
    }

    .st137 {
    fill: #F0F0F1;
    }

    .st138 {
    fill: #F1D27F;
    }

    .st139 {
    fill: #9EA1A3;
    }

    .st140 {
    fill: #969A9B;
    }

    .st141 {
    fill: #F0D078;
    }

    .st142 {
    fill: #EED27E;
    }

    .st143 {
    fill: #90C590;
    }

    .st144 {
    fill: #989B9D;
    }

    .st145 {
    fill: #8B8F91;
    }

    .st146 {
    fill: #F0D480;
    }

    .st147 {
    fill: #92C593;
    }

    .st148 {
    fill: #F2F2F2;
    }

    .st149 {
    fill: #9FA2A4;
    }

    .st150 {
    fill: #F8F8F8;
    }

    .st151 {
    fill: #FAFBFB;
    }

    .st152 {
    fill: #EEEFEF;
    }

    .st153 {
    fill: #878B8D;
    }

    .st154 {
    fill: #EBECEC;
    }

    .st155 {
    fill: #D2D3D4;
    }

    .st156 {
    fill: #909495;
    }

    .st157 {
    fill: #8B8E90;
    }

    .st158 {
    fill: #868A8C;
    }

    .st159 {
    fill: #A8ABAC;
    }

    .st160 {
    fill: #EEEEEE;
    }

    .st161 {
    fill: #F1F1F0;
    }

    .st162 {
    fill: #F9F7F0;
    }

    .st163 {
    fill: #F6F4EE;
    }

    .st164 {
    fill: #F8F5EE;
    }

    .st165 {
    fill: #FBF8F0;
    }

    .st166 {
    fill: #FAF7EF;
    }

    .st167 {
    fill: #EFE8D2;
    }

    .st168 {
    fill: #EFD99C;
    }

    .st169 {
    fill: #E6E6E5;
    }

    .st170 {
    fill: #EFE5CA;
    }

    .st171 {
    fill: #EFE1B7;
    }

    .st172 {
    fill: #EFD795;
    }

    .st173 {
    fill: #E2F2D8;
    }

    .st174 {
    fill: #A8CEA7;
    }

    .st175 {
    fill: #E2E3E3;
    }

    .st176 {
    fill: #8F9394;
    }

    .st177 {
    fill: #94989A;
    }

    .st178 {
    fill: #909496;
    }

    .st179 {
    fill: #9BC89C;
    }

    .st180 {
    fill: #90C391;
    }

    .st181 {
    fill: #EFE3C0;
    }

    .st182 {
    fill: #F0D99A;
    }

    .st183 {
    fill: #EEEEED;
    }

    .st184 {
    fill: #F8F6F0;
    }

    .st185 {
    fill: #E9E9E9;
    }

    .st186 {
    fill: #ECEFF3;
    }

    .st187 {
    fill: #F1F1EF;
    }

    .st188 {
    fill: #F7F4EF;
    }

    .st189 {
    fill: #8D9092;
    }

    .st190 {
    fill: #B0B4C9;
    }

    .st191 {
    fill: #767E82;
    }

    .st192 {
    fill: #F5F4F1;
    }

    .st193 {
    fill: #737C80;
    }

    .st194 {
    fill: #A2A7AA;
    }

    .st195 {
    fill: #F6F5F1;
    }

    .st196 {
    fill: #6F787C;
    }

    .st197 {
    fill: #737B7F;
    }

    .st198 {
    fill: #757E82;
    }

    .st199 {
    fill: #F3F2EF;
    }

    .st200 {
    fill: #EAECED;
    }

    .st201 {
    fill: #B2B7B9;
    }

    .st202 {
    fill: #E1F2D7;
    }

    .st203 {
    fill: #A5CCA5;
    }

    .st204 {
    fill: #ADD1AB;
    }

    .st205 {
    fill: #8EC38F;
    }

    .st206 {
    fill: #A3CCA3;
    }

    .st207 {
    fill: #8DC38C;
    }

    .st208 {
    fill: #A3CBA3;
    }

    .st209 {
    fill: #A2CBA2;
    }

    .st210 {
    fill: #F0D07A;
    }

    .st211 {
    fill: #F9F1CF;
    }

    .st212 {
    fill: #F7E299;
    }

    .st213 {
    fill: #F7E197;
    }

    .st214 {
    fill: #FDF9E4;
    }

    .st215 {
    fill: #F4DB8C;
    }

    .st216 {
    fill: #F3D989;
    }

    .st217 {
    fill: #F8E59F;
    }

    .st218 {
    fill: #8EBF7E;
    }

    .st219 {
    fill: #FBF5D6;
    }

    .st220 {
    fill: #F6E196;
    }

    .st221 {
    fill: #F4DA8B;
    }

    .st222 {
    fill: #90C490;
    }

    .st223 {
    fill: #B9D8B3;
    }

    .st224 {
    fill: #F7F7F7;
    }

    .st225 {
    fill: #9B9FA0;
    }

    .st226 {
    fill: #8E9293;
    }

    .st227 {
    fill: #929698;
    }

    .st228 {
    fill: #A6CDA6;
    }

    .st229 {
    fill: #8FC390;
    }

    .st230 {
    fill: #BDDCB4;
    }

    .st231 {
    fill: #96C797;
    }

    .st232 {
    fill: #E4E8E2;
    }

    .st233 {
    fill: #93C594;
    }

    .st234 {
    fill: #F7FBF4;
    }

    .st235 {
    fill: #F3F9F1;
    }

    .st236 {
    fill: #F6FAF4;
    }

    .st237 {
    fill: #EBF3E7;
    }

    .st238 {
    fill: #E5F1E2;
    }

    .st239 {
    fill: #A9CFA8;
    }

    .st240 {
    fill: #EFF6EA;
    }

    .st241 {
    fill: #F1F7EE;
    }

    .st242 {
    fill: #E7F3E2;
    }

    .st243 {
    fill: #E5F4DB;
    }

    .st244 {
    fill: #D9F0CB;
    }

    .st245 {
    fill: #E0F2D6;
    }

    .st246 {
    fill: #D8EBD1;
    }

    .st247 {
    fill: #E0F2D5;
    }

    .st248 {
    fill: #71797D;
    }

    .st249 {
    fill: #F7F5EF;
    }

    .st250 {
    fill: #E1E3E5;
    }

    .st251 {
    fill: #D3D6D7;
    }

    .st252 {
    fill: #96999B;
    }

    .st253 {
    fill: #999D9E;
    }

    .st254 {
    fill: #81898C;
    }

    .st255 {
    fill: #767F82;
    }

    .st256 {
    fill: #8B9295;
    }

    .st257 {
    fill: #FBFBFB;
    }

    .st258 {
    fill: #777F83;
    }

    .st259 {
    fill: #E6E8E9;
    }

    .st260 {
    fill: #DEE0E2;
    }

    .st261 {
    fill: #EFD68F;
    }

    .st262 {
    fill: #A5A8AA;
    }

    .st263 {
    fill: #A0A6AA;
    }

    .st264 {
    fill: #999C9E;
    }

    .st265 {
    fill: #9C9FA0;
    }

    .st266 {
    fill: #E2E4E2;
    }

    .st267 {
    fill: #B2B8B3;
    }

    .st268 {
    fill: #909395;
    }

    .st269 {
    fill: #8F9294;
    }

    .st270 {
    fill: #A0A3A3;
    }

    .st271 {
    fill: #F6F2E7;
    }

    .st272 {
    fill: #4B843C;
    }

    .st273 {
    fill: #488138;
    }

    .st274 {
    fill: #478137;
    }

    .st275 {
    fill: #609552;
    }

    .st276 {
    fill: #757E81;
    }

    .st277 {
    fill: #DCF1D0;
    }

    .st278 {
    fill: #CCCECF;
    }

    .st279 {
    fill: #E6E7E7;
    }

    .st280 {
    fill: #FAF7F2;
    }

    .st281 {
    fill: #8C9092;
    }

    .st282 {
    fill: #8D9193;
    }

    .st283 {
    fill: #919496;
    }

    .st284 {
    fill: #919596;
    }

    .st285 {
    fill: #F1F1F2;
    }

    .st286 {
    fill: #A5A8A9;
    }

    .st287 {
    fill: #ABAEAF;
    }

    .st288 {
    fill: #DADBDB;
    }

    .st289 {
    fill: #ABAEB0;
    }

    .st290 {
    fill: #8E9193;
    }

    .st291 {
    fill: #F4F5F6;
    }

    .st292 {
    fill: #EAEBED;
    }

    .st293 {
    fill: #E7E8EA;
    }

    .st294 {
    fill: #E8EAEB;
    }

    .st295 {
    fill: #F0F0F2;
    }

    .st296 {
    fill: #E4E6E8;
    }

    .st297 {
    fill: #979B9D;
    }

    .st298 {
    fill: #9B9EA0;
    }

    .st299 {
    fill: #989C9D;
    }

    .st300 {
    fill: #E2E3E4;
    }

    .st301 {
    fill: #9DA0A1;
    }

    .st302 {
    fill: #FCFDFE;
    }

    .st303 {
    fill: #AFB2B3;
    }

    .st304 {
    fill: #F9FAFA;
    }

    .st305 {
    fill: #FAFAFB;
    }

    .st306 {
    fill: #ADB2B5;
    }

    .st307 {
    fill: #E8E9EB;
    }

    .st308 {
    fill: #E9EBEC;
    }

    .st309 {
    fill: #E5E7E7;
    }

    .st310 {
    fill: #ECEEEF;
    }

    .st311 {
    fill: #EDEEF0;
    }

    .st312 {
    fill: #CEDFCE;
    }

    .st313 {
    fill: #C4C5C3;
    }

    .st314 {
    fill: #E0E1E1;
    }

    .st315 {
    fill: #E7E7E8;
    }

    .st316 {
    fill: #CACDD0;
    }

    .st317 {
    fill: #969A9C;
    }

    .st318 {
    fill: #C6C8C9;
    }

    .st319 {
    fill: #EDEDED;
    }

    .st320 {
    fill: #F1F1F1;
    }

    .st321 {
    fill: #F5F6F6;
    }

    .st322 {
    fill: #ECF0F3;
    }

    .st323 {
    fill: #EBEFF3;
    }

    .st324 {
    fill: #F2F3F3;
    }

    .st325 {
    fill: #929697;
    }

    .st326 {
    fill: #F7F3E7;
    }

    .st327 {
    fill: #AFD0AF;
    }

    .st328 {
    fill: #A3A6A8;
    }

    .st329 {
    fill: #A9CEA9;
    }

    .st330 {
    fill: #A0A3A5;
    }

    .st331 {
    fill: #B0D1B0;
    }

    .st332 {
    fill: #B2D2B2;
    }

    .st333 {
    fill: #B7D5B9;
    }

    .st334 {
    fill: #BABCBD;
    }

    .st335 {
    fill: #B0D1B1;
    }

    .st336 {
    fill: #939799;
    }

    .st337 {
    fill: #A4A7A9;
    }

    .st338 {
    fill: #F5F4F4;
    }

    .st339 {
    fill: #ACCFAD;
    }

    .st340 {
    fill: #F1D482;
    }

    .st341 {
    fill: #ADCFA9;
    }

    .st342 {
    fill: #DCEDD3;
    }

    .st343 {
    fill: #E1E8DD;
    }

    .st344 {
    fill: #96C796;
    }

    .st345 {
    fill: #98C898;
    }

    .st346 {
    fill: #9AC99A;
    }

    .st347 {
    fill: #93C593;
    }

    .st348 {
    fill: #94C694;
    }

    .st349 {
    fill: #97C896;
    }

    .st350 {
    fill: #E4E7E3;
    }

    .st351 {
    fill: #E1E8DE;
    }

    .st352 {
    fill: #E4E9E1;
    }

    .st353 {
    fill: #E6E8E4;
    }

    .st354 {
    fill: #E3E8E1;
    }

    .st355 {
    fill: #E1EDDB;
    }

    .st356 {
    fill: #E5E8E2;
    }

    .st357 {
    fill: #A5CDA5;
    }

    .st358 {
    fill: #EAF4E6;
    }

    .st359 {
    fill: #E8F0E4;
    }

    .st360 {
    fill: #90C491;
    }

    .st361 {
    fill: #E6F1E1;
    }

    .st362 {
    fill: #E1E7DE;
    }

    .st363 {
    fill: #FBF4D5;
    }

    .st364 {
    fill: #77461D;
    }

    .st365 {
    fill: #F0D07B;
    }

    .st366 {
    fill: #F0CF79;
    }

    .st367 {
    fill: #F6E096;
    }

    .st368 {
    fill: #F5F1EA;
    }

    .st369 {
    fill: #91C491;
    }

    .st370 {
    fill: #9DC99E;
    }

    .st371 {
    fill: #E1E9DC;
    }

    .st372 {
    fill: #E6E8E5;
    }

    .st373 {
    fill: #FCF6D8;
    }

    .st374 {
    fill: #F6E095;
    }

    .st375 {
    fill: #B2CEA1;
    }

    .st376 {
    fill: #F0D17C;
    }

    .st377 {
    fill: #8EC289;
    }

    .st378 {
    fill: #F7E29A;
    }

    .st379 {
    fill: #8FC48E;
    }

    .st380 {
    fill: #ADD1AE;
    }

    .st381 {
    fill: #A0CBA0;
    }

    .st382 {
    fill: #CEEABF;
    }

    .st383 {
    fill: #B3D4B1;
    }

    .st384 {
    fill: #D4EBC6;
    }

    .st385 {
    fill: #78471E;
    }

    .st386 {
    fill: #76441A;
    }

    .st387 {
    fill: #78471D;
    }

    .st388 {
    fill: #77461C;
    }

    .st389 {
    fill: #744318;
    }

    .st390 {
    fill: #F9F1D4;
    }

    .st391 {
    fill: #7A4A20;
    }

    .st392 {
    fill: #7B4C22;
    }

    .st393 {
    fill: #F7E7B9;
    }

    .st394 {
    fill: #F8F0D1;
    }

    .st395 {
    fill: #F0E5C6;
    }

    .st396 {
    fill: #EBD9AB;
    }

    .st397 {
    fill: #E9D8AF;
    }

    .st398 {
    fill: #C8B7A6;
    }

    .st399 {
    fill: #E5D2A4;
    }

    .st400 {
    fill: #A1A4A6;
    }

    .st401 {
    fill: #D4D5D6;
    }

    .st402 {
    fill: #EDEEEE;
    }

    .st403 {
    fill: #D5D7D7;
    }

    .st404 {
    fill: #C1DCBB;
    }

    .st405 {
    fill: #E7E7E7;
    }

    .st406 {
    fill: #838A8E;
    }

    .st407 {
    fill: #EAEBEC;
    }

    .st408 {
    fill: #F5F4F3;
    }

    .st409 {
    fill: #FDFAEA;
    }

    .st410 {
    fill: #F1D589;
    }

    .st411 {
    fill: #8A603A;
    }

    .st412 {
    fill: #EFE5C9;
    }

    .st413 {
    fill: #D6D8D8;
    }

    .st414 {
    fill: #E9E9EA;
    }

    .st415 {
    fill: #EFF0F0;
    }

    .st416 {
    fill: #DDDFDF;
    }

    .st417 {
    fill: #A3A6A7;
    }

    .st418 {
    fill: #F5F5F6;
    }

    .st419 {
    fill: #E3E4E5;
    }

    .st420 {
    fill: #DADBDC;
    }

    .st421 {
    fill: #AEB1B2;
    }

    .st422 {
    fill: #E3E4E4;
    }

    .st423 {
    fill: #9FA3A3;
    }

    .st424 {
    fill: #DEE0E0;
    }

    .st425 {
    fill: #B1B5B4;
    }

    .st426 {
    fill: #F9F7F1;
    }

    .st427 {
    fill: #F7F7F8;
    }

    .st428 {
    fill: #F3F3F4;
    }

    .st429 {
    fill: #A1A4A5;
    }

    .st430 {
    fill: #9A9E9F;
    }

    .st431 {
    fill: #9DA1A2;
    }

    .st432 {
    fill: #BFC1C2;
    }

    .st433 {
    fill: #E6E7E8;
    }

    .st434 {
    fill: #DBDCDC;
    }

    .st435 {
    fill: #EDEDEE;
    }

    .st436 {
    fill: #AAADAE;
    }

    .st437 {
    fill: #B1B4B5;
    }

    .st438 {
    fill: #C8E9B4;
    }

    .st439 {
    fill: #F2F3F2;
    }

    .st440 {
    fill: #9EA1A2;
    }

    .st441 {
    fill: #E2F0DA;
    }

    .st442 {
    fill: #EBECEB;
    }

    .st443 {
    fill: #AEB4B0;
    }

    .st444 {
    fill: #B0B3B4;
    }

    .st445 {
    fill: #CACCCD;
    }

    .st446 {
    fill: #99C79A;
    }

    .st447 {
    fill: #E7E8E8;
    }

    .st448 {
    fill: #E1E2E2;
    }

    .st449 {
    fill: #A4A7A8;
    }

    .st450 {
    fill: #E8E9E9;
    }

    .st451 {
    fill: #BCBEBF;
    }

    .st452 {
    fill: #F7F6F3;
    }

    .st453 {
    fill: #F2F3F4;
    }

    .st454 {
    fill: #FCF9F1;
    }

    .st455 {
    fill: #EAEAEA;
    }

    .st456 {
    fill: #ECECEC;
    }

    .st457 {
    fill: #FBFDFE;
    }

    .st458 {
    fill: #828A8D;
    }

    .st459 {
    fill: #7C8487;
    }

    .st460 {
    fill: #FCF9F0;
    }

    .st461 {
    fill: #70787C;
    }

    .st462 {
    fill: #F7F5F0;
    }

    .st463 {
    fill: #89C08A;
    }

    .st464 {
    fill: #EBEBEB;
    }

    .st465 {
    fill: #9DC89E;
    }

    .st466 {
    fill: #C4C7C9;
    }

    .st467 {
    fill: #DEE1E1;
    }

    .st468 {
    fill: #FAF7F0;
    }

    .st469 {
    fill: #F7F3EB;
    }

    .st470 {
    fill: #F0D282;
    }

    .st471 {
    fill: #EADCBB;
    }

    .st472 {
    fill: #F2D891;
    }

    .st473 {
    fill: #F1D78F;
    }

    .st474 {
    fill: #F2D486;
    }

    .st475 {
    fill: #F0DEB0;
    }

    .st476 {
    fill: #EFD48A;
    }

    .st477 {
    fill: #EFE8D3;
    }

    .st478 {
    fill: #EFE9D8;
    }

    .st479 {
    fill: #EFD692;
    }

    .st480 {
    fill: #E9EAE4;
    }

    .st481 {
    fill: #EDDAAB;
    }

    .st482 {
    fill: #79481E;
    }

    .st483 {
    fill: #EFEADB;
    }

    .st484 {
    fill: #9D7B5A;
    }

    .st485 {
    fill: #A4CCA4;
    }

    .st486 {
    fill: #DEDFDF;
    }

    .st487 {
    fill: #CACBCC;
    }

    .st488 {
    fill: #B5B8B9;
    }

    .st489 {
    fill: #508741;
    }

    .st490 {
    fill: #4A833B;
    }

    .st491 {
    fill: #447E34;
    }

    .st492 {
    fill: #3F7B2F;
    }

    .st493 {
    fill: #E5EFE2;
    }

    .st494 {
    fill: #568C48;
    }

    .st495 {
    fill: #528A44;
    }

    .st496 {
    fill: #447E33;
    }

    .st497 {
    fill: #78A66E;
    }

    .st498 {
    fill: #C9EAB5;
    }

    .st499 {
    fill: #CAE9B7;
    }

    .st500 {
    fill: #D1ECBF;
    }

    .st501 {
    fill: #649657;
    }

    .st502 {
    fill: #3D792C;
    }

    .st503 {
    fill: #DDF1D0;
    }

    .st504 {
    fill: #4E863E;
    }

    .st505 {
    fill: #588F49;
    }

    .st506 {
    fill: #B3B6B7;
    }

    .st507 {
    fill: #EBECED;
    }

    .st508 {
    fill: #B3B7BA;
    }

    .st509 {
    fill: #ECEDED;
    }

    .st510 {
    fill: #D3D5D5;
    }

    .st511 {
    fill: #DCF1CF;
    }

    .st512 {
    fill: #E9EAEA;
    }

    .st513 {
    fill: #FAF7F1;
    }

    .st514 {
    fill: #F4F2EE;
    }

    .st515 {
    fill: #BDBFC1;
    }

    .st516 {
    fill: #DEDFE0;
    }

    .st517 {
    fill: #F6F7F7;
    }

    .st518 {
    fill: #EFEFF0;
    }

    .st519 {
    fill: #57BEF8;
    }

    .st520 {
    fill: #C8CCCE;
    }

    .st521 {
    fill: #E3E5E5;
    }

    .st522 {
    fill: #DBDAD6;
    }

    .st523 {
    fill: #E5E6E7;
    }

    .st524 {
    fill: #D3D4D5;
    }

    .st525 {
    fill: #F3F3F2;
    }

    .st526 {
    fill: #F3F2F1;
    }

    .st527 {
    fill: #EAEAEB;
    }

    .st528 {
    fill: #8C8F91;
    }

    .st529 {
    fill: #A2A5A7;
    }

    .st530 {
    fill: #A1A5A6;
    }

    .st531 {
    fill: #E7E8E9;
    }

    .st532 {
    fill: #C3C5C6;
    }

    .st533 {
    fill: #B2B5B6;
    }

    .st534 {
    fill: #E3E4E2;
    }

    .st535 {
    fill: #BBD9B5;
    }

    .st536 {
    fill: #DFE0E0;
    }

    .st537 {
    fill: #FCF5D6;
    }

    .st538 {
    fill: #76451B;
    }

    .st539 {
    fill: #79491F;
    }

    .st540 {
    fill: #7A4B21;
    }

    .st541 {
    fill: #FDF7D9;
    }

    .st542 {
    fill: #EFE1BC;
    }

    .st543 {
    fill: #7E4F26;
    }

    .st544 {
    fill: #E8D8B3;
    }

    .st545 {
    fill: #F3E2B5;
    }

    .st546 {
    fill: #F6E7BB;
    }

    .st547 {
    fill: #49823A;
    }

    .st548 {
    fill: #EAF3E7;
    }

    .st549 {
    fill: #437D33;
    }

    .st550 {
    fill: #F0F6ED;
    }

    .st551 {
    fill: #4E863F;
    }

    .st552 {
    fill: #588D4A;
    }

    .st553 {
    fill: #629455;
    }

    .st554 {
    fill: #E8F1E5;
    }

    .st555 {
    fill: #F0D17A;
    }

    .st556 {
    fill: #ADD0AD;
    }

    .st557 {
    fill: #9BC99C;
    }

    .st558 {
    fill: #96C698;
    }

    .st559 {
    fill: #E9EAE9;
    }

    .st560 {
    fill: #96C697;
    }

    .st561 {
    fill: #E2E7E2;
    }

    .st562 {
    fill: #AACEAA;
    }

    .st563 {
    fill: #835731;
    }

    .st564 {
    fill: #EED694;
    }

    .st565 {
    fill: #F5F4EF;
    }

    .st566 {
    fill: #F2E3B8;
    }

    .st567 {
    fill: #F9F0D0;
    }

    .st568 {
    fill: #9CC99D;
    }

    .st569 {
    fill: #97C698;
    }

    .st570 {
    fill: #91C492;
    }

    .st571 {
    fill: #9ECA9F;
    }

    .st572 {
    fill: #9DCA9F;
    }

    .st573 {
    fill: #E1E5E1;
    }

    .st574 {
    fill: #8EC28F;
    }

    .st575 {
    fill: #94C595;
    }

    .st576 {
    fill: #F0D68D;
    }

    .st577 {
    fill: #ABCFAD;
    }

    .st578 {
    fill: #EFE6CC;
    }

    .st579 {
    fill: #E4E8E4;
    }

    .st580 {
    fill: #CEE0CF;
    }

    .st581 {
    fill: #D6E4D7;
    }

    .st582 {
    fill: #EFE4C3;
    }

    .st583 {
    fill: #A4CDA6;
    }

    .st584 {
    fill: #C4DBC6;
    }

    .st585 {
    fill: #EFDCA6;
    }

    .st586 {
    fill: #76451C;
    }

    .st587 {
    fill: #78481E;
    }

    .st588 {
    fill: #794920;
    }

    .st589 {
    fill: #75441A;
    }

    .st590 {
    fill: #734218;
    }

    .st591 {
    fill: #FBF0BA;
    }

    .st592 {
    fill: #F9F1D3;
    }

    .st593 {
    fill: #7D4F25;
    }

    .st594 {
    fill: #F4F3F2;
    }

    .st595 {
    fill: #F2E2B6;
    }

    .st596 {
    fill: #F4E5BB;
    }

    .st597 {
    fill: #EEDCAF;
    }

    .st598 {
    fill: #F9ECC0;
    }

    .st599 {
    fill: #F6E7BA;
    }

    .st600 {
    fill: #FCF2BA;
    }

    .st601 {
    fill: #F5DE95;
    }

    .st602 {
    fill: #D4C19F;
    }

    .st603 {
    fill: #F3D992;
    }

    .st604 {
    fill: #987041;
    }

    .st605 {
    fill: #C3AA85;
    }

    .st606 {
    fill: #EFDCA5;
    }

    .st607 {
    fill: #F6E4B1;
    }

    .st608 {
    fill: #F1D791;
    }

    .st609 {
    fill: #F2F1F0;
    }

    .st610 {
    fill: #F6E4B0;
    }

    .st611 {
    fill: #BCA791;
    }

    .st612 {
    fill: #F6E8BF;
    }

    .st613 {
    fill: #BC9C6D;
    }

    .st614 {
    fill: #F6EECE;
    }

    .st615 {
    fill: #F6F5F5;
    }

    .st616 {
    fill: #FBFCFC;
    }

    .st617 {
    fill: #C7CACC;
    }

    .st618 {
    fill: #9EA4A7;
    }

    .st619 {
    fill: #F1D381;
    }

    .st620 {
    fill: #ACAFB1;
    }

    .st621 {
    fill: #D5D6D7;
    }

    .st622 {
    fill: #CED0D1;
    }

    .st623 {
    fill: #E4E5E5;
    }

    .st624 {
    fill: #DDDEDE;
    }

    .st625 {
    fill: #B8BABB;
    }

    .st626 {
    fill: #FCFDFD;
    }

    .st627 {
    fill: #AFB2B4;
    }

    .st628 {
    fill: #DCDDDD;
    }

    .st629 {
    fill: #E1E2E3;
    }

    .st630 {
    fill: #A2A5A6;
    }

    .st631 {
    fill: #ACAFB0;
    }

    .st632 {
    fill: #C4C7C7;
    }

    .st633 {
    fill: #9AC89B;
    }

    .st634 {
    fill: #EEEFF0;
    }

    .st635 {
    fill: #F6F4EF;
    }

    .st636 {
    fill: #EBEBEC;
    }

    .st637 {
    fill: #F8F6EF;
    }

    .st638 {
    fill: #F9F6ED;
    }

    .st639 {
    fill: #E4E5E6;
    }

    .st640 {
    fill: #FDF6D8;
    }

    .st641 {
    fill: #F1D17E;
    }

    .st642 {
    fill: #F6DF94;
    }

    .st643 {
    fill: #F8E59E;
    }

    .st644 {
    fill: #F6DE92;
    }

    .st645 {
    fill: #E5D6B4;
    }

    .st646 {
    fill: #D9E4DA;
    }

    .st647 {
    fill: #E4E5E4;
    }

    .st648 {
    fill: #EFE4C5;
    }

    .st649 {
    fill: #F0DA9D;
    }

    .st650 {
    fill: #EFE4C4;
    }

    .st651 {
    fill: #B6B9BA;
    }

    .st652 {
    fill: #E5E9E5;
    }

    .st653 {
    fill: #77471D;
    }

    .st654 {
    fill: #7B4B21;
    }

    .st655 {
    fill: #F0E1BC;
    }

    .st656 {
    fill: #E9D8B0;
    }

    .st657 {
    fill: #B29679;
    }

    .st658 {
    fill: #D0BEAB;
    }

    .st659 {
    fill: #F6E4B2;
    }

    .st660 {
    fill: #92C493;
    }

    .st661 {
    fill: #E6E9E6;
    }

    .st662 {
    fill: #98C79A;
    }

    .st663 {
    fill: #E3E7E3;
    }

    .st664 {
    fill: #9FCBA0;
    }

    .st665 {
    fill: #A5CDA6;
    }

    .st666 {
    fill: #9FCAA1;
    }

    .st667 {
    fill: #99C89A;
    }

    .st668 {
    fill: #97C798;
    }

    .st669 {
    fill: #95C696;
    }

    .st670 {
    fill: #E6E8E6;
    }

    .st671 {
    fill: #E4E8E5;
    }

    .st672 {
    fill: #A0CBA1;
    }

    .st673 {
    fill: #F0E2BC;
    }

    .st674 {
    fill: #A1CCA3;
    }

    .st675 {
    fill: #B4D4B6;
    }

    .st676 {
    fill: #B9D6BB;
    }

    .st677 {
    fill: #D5E3D6;
    }

    .st678 {
    fill: #F0D99D;
    }

    .st679 {
    fill: #C8E8B4;
    }

    .st680 {
    fill: #EDF4EA;
    }

    .st681 {
    fill: #F3F8F0;
    }

    .st682 {
    fill: #D7EBCF;
    }

    .st683 {
    fill: #DDEFD3;
    }

    .st684 {
    fill: #EAEAE9;
    }

    .st685 {
    fill: #979A9B;
    }

    .st686 {
    fill: #ECECED;
    }

    .st687 {
    fill: #E8E9EA;
    }

    .st688 {
    fill: #D3D3D0;
    }

    .st689 {
    fill: #F5F5F3;
    }

    .st690 {
    fill: #C3C6C6;
    }

    .st691 {
    fill: #B59971;
    }

    .st692 {
    fill: #F6EAC3;
    }

    .st693 {
    fill: #AD8B5B;
    }

    .st694 {
    fill: #E7F0E4;
    }

    .st695 {
    fill: #EFDEAF;
    }

    .st696 {
    fill: #F7F3E6;
    }

    .st697 {
    fill: #9DCA9E;
    }

    .st698 {
    fill: #BAD5BB;
    }

    .st699 {
    fill: #F6F2E5;
    }

    .st700 {
    fill: #B2CB97;
    }

    .st701 {
    fill: #F5F4EE;
    }

    .st702 {
    fill: #A3C893;
    }

    .st703 {
    fill: #9FC588;
    }

    .st704 {
    fill: #E2E3E2;
    }

    .st705 {
    fill: #EDE2C2;
    }

    .st706 {
    fill: #EEE3C4;
    }

    .st707 {
    fill: #F1E7C6;
    }

    .st708 {
    fill: #E1D9D1;
    }

    .st709 {
    fill: #F7EFCF;
    }

    .st710 {
    fill: #7F5125;
    }

    .st711 {
    fill: #FDF3C0;
    }

    .st712 {
    fill: #FDF4C3;
    }

    .st713 {
    fill: #FCF1B8;
    }

    .st714 {
    fill: #C0DEC2;
    }

    .st715 {
    fill: #F4DB98;
    }

    .st716 {
    fill: #FAEEBC;
    }

    .st717 {
    fill: #F9E7A3;
    }

    .st718 {
    fill: #F9F2D2;
    }

    .st719 {
    fill: #F7EFD1;
    }

    .st720 {
    fill: #F2E8C9;
    }

    .st721 {
    fill: #CBCDCD;
    }

    .st722 {
    fill: #9CC99E;
    }

    .st723 {
    fill: #FDF3BF;
    }

    .st724 {
    fill: #F6ECCC;
    }

    .st725 {
    fill: #FDF3C1;
    }

    .st726 {
    fill: #BE9067;
    }

    .st727 {
    fill: #55A0F0;
    }

    .st728 {
    fill: #334C5B;
    }

    .st729 {
    display: none;
    fill: #FFFFFF;
    }

    .st730 {
    fill: none;
    stroke: #E5EBEE;
    }

    .st731 {
    fill: #798893;
    }

    .st732 {
    fill: none;
    stroke: #E5EBEE;
    stroke-linecap: square;
    }

    .st733 {
    fill: #12C48B;
    }

    .st734 {
    fill: url(#Combined-Shape_1_);
    }

    .st735 {
    fill: #F16667;
    }

    .st736 {
    fill: #344C5B;
    }
    .st737 {
    fill: none;
    stroke: #B1BFC7;
    strokeWidth: 2;
    }

    .st738 {
    fill: none;
    stroke: #BACDD7;
    strokeWidth: 2;
    }

    .st739 {
    fill: #B1BFC7;
    }

    .st740 {
    fill: none;
    stroke: #B1BFC7;
    }
    
`

export default HomepageStyles;
"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 9950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ RequestAirdrop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const RequestAirdrop = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const { getUserSOLBalance  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!publicKey) {
            console.log('error', 'Wallet not connected!');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: 'error',
                description: 'Wallet not connected!'
            });
            return;
        }
        let signature = '';
        try {
            signature = await connection.requestAirdrop(publicKey, _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL);
            await connection.confirmTransaction(signature, 'confirmed');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'success',
                message: 'Airdrop successful!',
                txid: signature
            });
            getUserSOLBalance(publicKey, connection);
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Airdrop failed!`,
                description: error?.message,
                txid: signature
            });
            console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }, [
        publicKey,
        connection,
        getUserSOLBalance
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Airdrop 1 "
            })
        })
    }));
};

});

/***/ }),

/***/ 3535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ SendTransaction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const SendTransaction = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!publicKey) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Wallet not connected!`
            });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }
        let signature = '';
        try {
            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Keypair.generate().publicKey,
                lamports: 1000000
            }));
            signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'success',
                message: 'Transaction successful!',
                txid: signature
            });
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Transaction failed!`,
                description: error?.message,
                txid: signature
            });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [
        publicKey,
        _utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h,
        connection,
        sendTransaction
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",
            onClick: onClick,
            disabled: !publicKey,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden group-disabled:block ",
                    children: "Wallet not connected"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block group-disabled:hidden",
                    children: "Send Transaction"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 1701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SignMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(390);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1707);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// TODO: SignMessage





const SignMessage = ()=>{
    const { publicKey , signMessage  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        try {
            // `publicKey` will be null if the wallet isn't connected
            if (!publicKey) throw new Error('Wallet not connected!');
            // `signMessage` will be undefined if the wallet doesn't support it
            if (!signMessage) throw new Error('Wallet does not support message signing!');
            // Encode anything as bytes
            const message = new TextEncoder().encode('Hello, world!');
            // Sign the bytes using the wallet
            const signature = await signMessage(message);
            // Verify that the bytes were signed using the private key that matches the known public key
            if (!tweetnacl__WEBPACK_IMPORTED_MODULE_4__.sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
                type: 'success',
                message: 'Sign message successful!',
                txid: bs58__WEBPACK_IMPORTED_MODULE_2___default().encode(signature)
            });
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
                type: 'error',
                message: `Sign Message failed!`,
                description: error?.message
            });
            console.log('error', `Sign Message failed! ${error?.message}`);
        }
    }, [
        publicKey,
        _utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h,
        signMessage
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",
            onClick: onClick,
            disabled: !publicKey,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden group-disabled:block",
                    children: "Wallet not connected"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block group-disabled:hidden",
                    children: "Sign Message"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const useNotificationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get)=>({
        notifications: [],
        set: (fn)=>set(immer__WEBPACK_IMPORTED_MODULE_1___default()(fn))
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNotificationStore);

});

/***/ }),

/***/ 2405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const useUserSOLBalanceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get)=>({
        balance: 0,
        getUserSOLBalance: async (publicKey, connection)=>{
            let balance = 0;
            try {
                balance = await connection.getBalance(publicKey, 'confirmed');
                balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL;
            } catch (e) {
                console.log(`error getting balance: `, e);
            }
            set((s)=>{
                s.balance = balance;
                console.log(`balance updated, `, balance);
            });
        }
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserSOLBalanceStore);

});

/***/ }),

/***/ 6654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ notify)
/* harmony export */ });
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__]);
_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

function notify(newNotification) {
    const { notifications , set: setNotificationStore ,  } = _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getState */ .Z.getState();
    setNotificationStore((state)=>{
        state.notifications = [
            ...notifications,
            {
                type: 'success',
                ...newNotification
            }, 
        ];
    });
}

});

/***/ }),

/***/ 917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BasicsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SignMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1701);
/* harmony import */ var _components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__, _components_SignMessage__WEBPACK_IMPORTED_MODULE_1__]);
([_components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__, _components_SignMessage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const BasicsView = ({})=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Basics"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SignMessage__WEBPACK_IMPORTED_MODULE_1__/* .SignMessage */ .Q, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__/* .SendTransaction */ .i, {})
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 6640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9950);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4147);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// Next, React

// Wallet

// Components


// Store

const HomeView = ({})=>{
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const balance = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((s)=>s.balance
    );
    const { getUserSOLBalance  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (wallet.publicKey) {
            console.log(wallet.publicKey.toBase58());
            getUserSOLBalance(wallet.publicKey, connection);
        }
    }, [
        wallet.publicKey,
        connection,
        getUserSOLBalance
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: [
                        "Scaffold Lite ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm font-normal align-top text-slate-700",
                            children: [
                                "v",
                                _package_json__WEBPACK_IMPORTED_MODULE_4__/* .version */ .i8
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: "md:w-full text-center text-slate-300 my-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Simply the fastest way to get started."
                        }),
                        "Next.js, tailwind, wallet, web3.js, and more."
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-md mx-auto mockup-code bg-primary p-6 my-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        "data-prefix": ">",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                            className: "truncate",
                            children: "Start building on Solana  "
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__/* .RequestAirdrop */ .E, {}),
                        wallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "SOL Balance: ",
                                (balance || 0).toLocaleString()
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "W": () => (/* reexport safe */ _basics__WEBPACK_IMPORTED_MODULE_1__.W)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6640);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basics__WEBPACK_IMPORTED_MODULE_1__, _home__WEBPACK_IMPORTED_MODULE_0__]);
([_basics__WEBPACK_IMPORTED_MODULE_1__, _home__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



});

/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = {"i8":"0.1.0"};

/***/ })

};
;
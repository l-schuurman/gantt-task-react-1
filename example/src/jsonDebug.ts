import { Task, TaskType } from "../../dist/types/public-types";

const scheduleJSON = [
    {
        "pID": 1,
        "pName": "kernelCompute",
        "pStart": 0,
        "pEnd": 0,
        "pClass": "ggroupblack",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 0,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "",
            "text": [],
            "tableData": [],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 2,
        "pName": "kernelCompute.B0",
        "pStart": 0,
        "pEnd": 2,
        "pClass": "gtaskblue",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 1,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "kernelCompute.B0:",
            "text": [],
            "tableData": [],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 7,
        "pName": "Feedback",
        "pStart": 1,
        "pEnd": 2,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 2,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Feedback:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Feedback Read"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Variable",
                    "value": {
                        "title": "",
                        "text": [
                            "Unknown variable"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 4,
        "pName": "kernelCompute.B2",
        "pStart": 2,
        "pEnd": 11,
        "pClass": "gtaskblue",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 1,
        "pOpen": 1,
        "pDepend": [
            2
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "kernelCompute.B2:",
            "text": [],
            "tableData": [],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 9,
        "pName": "Cluster 0",
        "pStart": 3,
        "pEnd": 7,
        "pClass": "gtaskgreen",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 4,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Cluster 0:",
            "text": [],
            "tableData": [
                {
                    "key": "Cluster Name",
                    "value": {
                        "title": "",
                        "text": [
                            "i_sfc_s_c0_in_zts13kernelcomputes_c0_enter2_k0_zts13kernelcompute_118_1gr"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Cluster Type",
                    "value": {
                        "title": "",
                        "text": [
                            "Stall-Free"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Cluster Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Cluster Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "4"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 24,
        "pName": "'i'",
        "pStart": 4,
        "pEnd": 5,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:50",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 50
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "'i':",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Feedback Read"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Variable",
                    "value": {
                        "title": "",
                        "text": [
                            "'i'"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 29,
        "pName": "+",
        "pStart": 4,
        "pEnd": 5,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:50",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 50
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [
            24
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "+:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Add"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Constant Operand",
                    "value": {
                        "title": "",
                        "text": [
                            "1 (0x1)"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 25,
        "pName": "arg3",
        "pStart": 2,
        "pEnd": 4,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "arg3:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Input Synchronization for 'arg3'"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 26,
        "pName": "arg0",
        "pStart": 2,
        "pEnd": 4,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "accessor.hpp:908",
            "debug": {
                "filename": "/p/psg/swip/hld/r/sycl/trunk/20220209/linux64/bin-llvm/../include/sycl/CL/sycl/accessor.hpp",
                "line": 908
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "arg0:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Input Synchronization for 'arg0'"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 27,
        "pName": "Ptr. Comp.",
        "pStart": 4,
        "pEnd": 5,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "accessor.hpp:930",
            "debug": {
                "filename": "/p/psg/swip/hld/r/sycl/trunk/20220209/linux64/bin-llvm/../include/sycl/CL/sycl/accessor.hpp",
                "line": 930
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [
            25,
            26
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Ptr. Comp.:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Pointer Computation"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "4"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 28,
        "pName": "Ptr. Comp.",
        "pStart": 4,
        "pEnd": 5,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "accessor.hpp:1686",
            "debug": {
                "filename": "/p/psg/swip/hld/r/sycl/trunk/20220209/linux64/bin-llvm/../include/sycl/CL/sycl/accessor.hpp",
                "line": 1686
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [
            24,
            27
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Ptr. Comp.:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Pointer Computation"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "4"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 22,
        "pName": "Exit",
        "pStart": 4,
        "pEnd": 7,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 9,
        "pOpen": 1,
        "pDepend": [
            24,
            28
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Exit:",
            "text": [],
            "tableData": [
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Exit FIFO Depth",
                    "value": {
                        "title": "",
                        "text": [
                            "32"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Exit FIFO Width",
                    "value": {
                        "title": "",
                        "text": [
                            "120"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Details",
                    "value": {
                        "title": "",
                        "text": [
                            "Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 11,
        "pName": "LD",
        "pStart": 7,
        "pEnd": 10,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:51",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 51
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 4,
        "pOpen": 1,
        "pDepend": [
            9
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "LD:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Load"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Width",
                    "value": {
                        "title": "",
                        "text": [
                            "32 bits"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "LSU Style",
                    "value": {
                        "title": "",
                        "text": [
                            "Prefetching"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Stall-free",
                    "value": {
                        "title": "",
                        "text": [
                            "No"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Global Memory",
                    "value": {
                        "title": "",
                        "text": [
                            "Yes"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "5"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 10,
        "pName": "-",
        "pStart": 7,
        "pEnd": 8,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:51",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 51
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 4,
        "pOpen": 1,
        "pDepend": [
            9
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "-:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Subtract"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "5"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 12,
        "pName": "Ptr. Comp.",
        "pStart": 7,
        "pEnd": 10,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 4,
        "pOpen": 1,
        "pDepend": [
            10
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Ptr. Comp.:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Pointer Computation"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "5"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 13,
        "pName": "ST",
        "pStart": 10,
        "pEnd": 11,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:51",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 51
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 4,
        "pOpen": 1,
        "pDepend": [
            11,
            12
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "ST:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Store"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Width",
                    "value": {
                        "title": "",
                        "text": [
                            "32 bits"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "LSU Style",
                    "value": {
                        "title": "",
                        "text": [
                            "Pipelined never-stall"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Stall-free",
                    "value": {
                        "title": "",
                        "text": [
                            "Yes"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Global Memory",
                    "value": {
                        "title": "",
                        "text": [
                            "No"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "8"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 3,
        "pName": "kernelCompute.B1",
        "pStart": 11,
        "pEnd": 12,
        "pClass": "gtaskblue",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 1,
        "pOpen": 1,
        "pDepend": [
            4
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "kernelCompute.B1:",
            "text": [],
            "tableData": [],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 5,
        "pName": "kernelCompute.B3",
        "pStart": 11,
        "pEnd": 21,
        "pClass": "gtaskblue",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 1,
        "pOpen": 1,
        "pDepend": [
            3
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "kernelCompute.B3:",
            "text": [],
            "tableData": [],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 15,
        "pName": "Cluster 1",
        "pStart": 12,
        "pEnd": 21,
        "pClass": "gtaskgreen",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 5,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Cluster 1:",
            "text": [],
            "tableData": [
                {
                    "key": "Cluster Name",
                    "value": {
                        "title": "",
                        "text": [
                            "i_sfc_s_c0_in_zts13kernelcomputes_c0_enter121_k0_zts13kernelcompute_347_1gr"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Cluster Type",
                    "value": {
                        "title": "",
                        "text": [
                            "Stall-Free"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Cluster Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Cluster Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "9"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 41,
        "pName": "'result'",
        "pStart": 18,
        "pEnd": 19,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "'result':",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Feedback Read"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Variable",
                    "value": {
                        "title": "",
                        "text": [
                            "'result'"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "7"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 44,
        "pName": "-",
        "pStart": 18,
        "pEnd": 19,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            41
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "-:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Subtract"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "7"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 35,
        "pName": "mem",
        "pStart": 13,
        "pEnd": 14,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:56",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 56
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "mem:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Feedback Read"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Variable",
                    "value": {
                        "title": "",
                        "text": [
                            "mem"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 36,
        "pName": "Ptr. Comp.",
        "pStart": 13,
        "pEnd": 14,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            35
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Ptr. Comp.:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Pointer Computation"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 37,
        "pName": "LD",
        "pStart": 13,
        "pEnd": 17,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            36
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "LD:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Load"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Width",
                    "value": {
                        "title": "",
                        "text": [
                            "32 bits"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "LSU Style",
                    "value": {
                        "title": "",
                        "text": [
                            "Pipelined never-stall"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Stall-free",
                    "value": {
                        "title": "",
                        "text": [
                            "Yes"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Global Memory",
                    "value": {
                        "title": "",
                        "text": [
                            "No"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "4"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 38,
        "pName": "Or",
        "pStart": 13,
        "pEnd": 14,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            35
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Or:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Or"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Constant Operand",
                    "value": {
                        "title": "",
                        "text": [
                            "1 (0x1)"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 39,
        "pName": "Ptr. Comp.",
        "pStart": 13,
        "pEnd": 14,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            38
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Ptr. Comp.:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Pointer Computation"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 40,
        "pName": "LD",
        "pStart": 13,
        "pEnd": 17,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            39
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "LD:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Load"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Width",
                    "value": {
                        "title": "",
                        "text": [
                            "32 bits"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "LSU Style",
                    "value": {
                        "title": "",
                        "text": [
                            "Pipelined never-stall"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Stall-free",
                    "value": {
                        "title": "",
                        "text": [
                            "Yes"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Global Memory",
                    "value": {
                        "title": "",
                        "text": [
                            "No"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "4"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 42,
        "pName": "-",
        "pStart": 17,
        "pEnd": 18,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            40
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "-:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Subtract"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "6"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 43,
        "pName": "+",
        "pStart": 17,
        "pEnd": 18,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            37,
            42
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "+:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Add"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "6"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 45,
        "pName": "-",
        "pStart": 18,
        "pEnd": 19,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            44,
            43
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "-:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Subtract"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "7"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 50,
        "pName": "FFwd Src",
        "pStart": 11,
        "pEnd": 18,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            45
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "FFwd Src:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "FFwd Source"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "7"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 46,
        "pName": "+",
        "pStart": 13,
        "pEnd": 14,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:56",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 56
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [
            35
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "+:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "32-bit Integer Add"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Constant Operand",
                    "value": {
                        "title": "",
                        "text": [
                            "2 (0x2)"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 33,
        "pName": "Exit",
        "pStart": 18,
        "pEnd": 21,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 15,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Exit:",
            "text": [],
            "tableData": [
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "7"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "3"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Exit FIFO Depth",
                    "value": {
                        "title": "",
                        "text": [
                            "32"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Exit FIFO Width",
                    "value": {
                        "title": "",
                        "text": [
                            "24"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Details",
                    "value": {
                        "title": "",
                        "text": [
                            "Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 6,
        "pName": "kernelCompute.B4",
        "pStart": 21,
        "pEnd": 24,
        "pClass": "gtaskblue",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 1,
        "pParent": 1,
        "pOpen": 1,
        "pDepend": [
            5
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "kernelCompute.B4:",
            "text": [],
            "tableData": [],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 19,
        "pName": "FFwd Dest",
        "pStart": 21,
        "pEnd": 22,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:57",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 57
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 6,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "FFwd Dest:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "FFwd Destination"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 17,
        "pName": "arg4",
        "pStart": 22,
        "pEnd": 23,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 6,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "arg4:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Input Synchronization for 'arg4'"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 16,
        "pName": "arg7",
        "pStart": 22,
        "pEnd": 23,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": " - "
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 6,
        "pOpen": 1,
        "pDepend": [],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "arg7:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Input Synchronization for 'arg7'"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 18,
        "pName": "Ptr. Comp.",
        "pStart": 22,
        "pEnd": 23,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "accessor.hpp:930",
            "debug": {
                "filename": "/p/psg/swip/hld/r/sycl/trunk/20220209/linux64/bin-llvm/../include/sycl/CL/sycl/accessor.hpp",
                "line": 930
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 6,
        "pOpen": 1,
        "pDepend": [
            17,
            16
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "Ptr. Comp.:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Pointer Computation"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "2"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "0"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    },
    {
        "pID": 20,
        "pName": "ST",
        "pStart": 22,
        "pEnd": 23,
        "pClass": "gtaskyellow",
        "pLink": "",
        "pMile": 0,
        "pRes": {
            "text": "max_replicates.cpp:59",
            "debug": {
                "filename": "/nfs/sc/disks/swuser_work_awolfe/hldkit/test_screenshot_freq2/p4/regtest/hld/sycl/usability/reports/screenshots/max_replicates/default/intel_a10gx_pac/1_2_1a/pac_a10/compile/max_replicates.cpp",
                "line": 59
            }
        },
        "pComp": 0,
        "pGroup": 0,
        "pParent": 6,
        "pOpen": 1,
        "pDepend": [
            19,
            18
        ],
        "pCaption": "",
        "pNotes": "",
        "pDetails": {
            "title": "ST:",
            "text": [],
            "tableData": [
                {
                    "key": "Instruction",
                    "value": {
                        "title": "",
                        "text": [
                            "Store"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Width",
                    "value": {
                        "title": "",
                        "text": [
                            "32 bits"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "LSU Style",
                    "value": {
                        "title": "",
                        "text": [
                            "Burst-coalesced"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Stall-free",
                    "value": {
                        "title": "",
                        "text": [
                            "No"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Global Memory",
                    "value": {
                        "title": "",
                        "text": [
                            "Yes"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Max Fanout",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Start Cycle",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                },
                {
                    "key": "Latency",
                    "value": {
                        "title": "",
                        "text": [
                            "1"
                        ],
                        "tableData": [],
                        "links": []
                    }
                }
            ],
            "links": []
        },
        "pGantt": null
    }
];

let parents = new Set();
scheduleJSON.forEach(element => {
    parents.add(element.pParent);
})

export let tasks: Task[] = [];

scheduleJSON.forEach((node: any, index: any) => {

    let taskItem: Task = {
        id: String(node.pID),
        type: "task" as TaskType,
        start: new Date(2000 + node.pStart, 0),
        end: new Date(2000 + node.pEnd, 0),
        name: node.pName,
        progress: 100,
        dependencies: node.pDepend.map(String),
        displayOrder: index + 1,
        isDisabled: true,
    }
    if (taskItem.id !== "1") {
        taskItem.project = node.pParent;
    }

    if (parents.has(taskItem.id)) {
        taskItem.type = "project";

        tasks.push(taskItem);
    }
}
);

console.log(parents)
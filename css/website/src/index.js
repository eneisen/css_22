import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

// document.getElementById("subject").value = Math.floor(
//   (1 + Math.random()) * 0x10000
// ).toString(16);

var defaultTags = {};

const MobileDetect = require("mobile-detect");
const mobile = new MobileDetect(window.navigator.userAgent);

if (mobile.mobile()) {
  defaultTags.mobile = mobile.mobile();
}

if (mobile.userAgent()) {
  defaultTags.browser = mobile.userAgent();
}

var list_x0 = [];
var list_y0 = [];
var list_z0 = [];
var list_x = [];
var list_y = [];
var list_z = [];
var list_alpha = [];
var list_beta = [];
var list_gamma = [];

var RandomForestClassifier = function () {
  var findMax = function (nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
      index = nums[i] > nums[index] ? i : index;
    }
    return index;
  };

  var trees = new Array();

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[8] <= -4.650881767272949) {
      if (features[0] <= -1.9560050070285797) {
        classes[0] = 0;
        classes[1] = 51;
        classes[2] = 0;
      } else {
        if (features[7] <= 1.3075900673866272) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 4;
        } else {
          if (features[0] <= -0.6454545557498932) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 2;
          } else {
            if (features[4] <= 3.0877243280410767) {
              classes[0] = 40;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 0;
              classes[1] = 1;
              classes[2] = 0;
            }
          }
        }
      }
    } else {
      if (features[7] <= 0.5549051761627197) {
        if (features[1] <= -3.524999901652336) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 2;
        } else {
          classes[0] = 7;
          classes[1] = 0;
          classes[2] = 0;
        }
      } else {
        if (features[9] <= 1.032328188419342) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 67;
        } else {
          if (features[5] <= 2.442039966583252) {
            classes[0] = 0;
            classes[1] = 17;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 46;
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[0] <= -2.3289870619773865) {
      classes[0] = 0;
      classes[1] = 55;
      classes[2] = 0;
    } else {
      if (features[8] <= -5.582789421081543) {
        if (features[0] <= 0.8498828858137131) {
          if (features[1] <= -2.944449096918106) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 2;
          } else {
            classes[0] = 49;
            classes[1] = 0;
            classes[2] = 0;
          }
        } else {
          if (features[0] <= 2.8899999856948853) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 5;
          } else {
            classes[0] = 0;
            classes[1] = 3;
            classes[2] = 0;
          }
        }
      } else {
        if (features[4] <= 0.5706100221723318) {
          classes[0] = 4;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 119;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[8] <= -5.061038970947266) {
      if (features[0] <= -1.9709174931049347) {
        classes[0] = 0;
        classes[1] = 48;
        classes[2] = 0;
      } else {
        if (features[5] <= 3.7505881786346436) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 5;
        } else {
          if (features[9] <= 1.868628740310669) {
            classes[0] = 39;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            if (features[8] <= -18.30424213409424) {
              classes[0] = 0;
              classes[1] = 1;
              classes[2] = 0;
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 2;
            }
          }
        }
      }
    } else {
      if (features[1] <= -0.3420903980731964) {
        if (features[3] <= 4.506666541099548) {
          if (features[3] <= 1.117916651070118) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 64;
          } else {
            if (features[4] <= 3.1044487953186035) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 17;
            } else {
              classes[0] = 0;
              classes[1] = 11;
              classes[2] = 0;
            }
          }
        } else {
          classes[0] = 0;
          classes[1] = 16;
          classes[2] = 0;
        }
      } else {
        if (features[9] <= 1.1065914928913116) {
          classes[0] = 12;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 22;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[5] <= 2.617222785949707) {
      if (features[1] <= -0.49934782087802887) {
        classes[0] = 0;
        classes[1] = 59;
        classes[2] = 0;
      } else {
        if (features[5] <= 0.7576923076994717) {
          classes[0] = 8;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 4;
        }
      }
    } else {
      if (features[1] <= -0.9946874976158142) {
        classes[0] = 0;
        classes[1] = 0;
        classes[2] = 90;
      } else {
        if (features[7] <= 2.482123374938965) {
          classes[0] = 43;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 33;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[8] <= -4.681089401245117) {
      if (features[7] <= 2.919917941093445) {
        if (features[3] <= 1.1533550545573235) {
          if (features[2] <= 0.8147801160812378) {
            classes[0] = 21;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            if (features[9] <= 0.8315394520759583) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 4;
            } else {
              classes[0] = 18;
              classes[1] = 0;
              classes[2] = 0;
            }
          }
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 5;
        }
      } else {
        classes[0] = 0;
        classes[1] = 56;
        classes[2] = 0;
      }
    } else {
      if (features[6] <= 9.044468402862549) {
        if (features[6] <= 8.844871997833252) {
          if (features[5] <= 2.2421610355377197) {
            classes[0] = 0;
            classes[1] = 2;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 104;
          }
        } else {
          if (features[4] <= 3.3882027864456177) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 7;
          } else {
            classes[0] = 0;
            classes[1] = 3;
            classes[2] = 0;
          }
        }
      } else {
        if (features[7] <= 1.6637214422225952) {
          classes[0] = 7;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 10;
          classes[2] = 0;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[0] <= -2.262049674987793) {
      classes[0] = 0;
      classes[1] = 62;
      classes[2] = 0;
    } else {
      if (features[2] <= 0.9283539652824402) {
        if (features[6] <= 6.692105293273926) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 4;
        } else {
          classes[0] = 37;
          classes[1] = 0;
          classes[2] = 0;
        }
      } else {
        if (features[7] <= 1.7592121958732605) {
          if (features[9] <= 1.0548236966133118) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 13;
          } else {
            classes[0] = 12;
            classes[1] = 0;
            classes[2] = 0;
          }
        } else {
          if (features[0] <= 2.5722580552101135) {
            if (features[0] <= -0.10719512403011322) {
              if (features[9] <= 1.8139039278030396) {
                if (features[0] <= -0.8776161000132561) {
                  classes[0] = 0;
                  classes[1] = 0;
                  classes[2] = 9;
                } else {
                  classes[0] = 6;
                  classes[1] = 0;
                  classes[2] = 0;
                }
              } else {
                classes[0] = 0;
                classes[1] = 0;
                classes[2] = 36;
              }
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 55;
            }
          } else {
            classes[0] = 0;
            classes[1] = 3;
            classes[2] = 0;
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[8] <= -4.712962865829468) {
      if (features[0] <= -2.147793412208557) {
        classes[0] = 0;
        classes[1] = 46;
        classes[2] = 0;
      } else {
        if (features[4] <= 1.9824858903884888) {
          if (features[5] <= 3.7655882835388184) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 1;
          } else {
            classes[0] = 45;
            classes[1] = 0;
            classes[2] = 0;
          }
        } else {
          if (features[6] <= 8.479032039642334) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 4;
          } else {
            classes[0] = 0;
            classes[1] = 3;
            classes[2] = 0;
          }
        }
      }
    } else {
      if (features[6] <= 8.724658966064453) {
        if (features[5] <= 2.527118682861328) {
          classes[0] = 0;
          classes[1] = 5;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 113;
        }
      } else {
        if (features[3] <= 1.1715151891112328) {
          if (features[3] <= 0.03333333507180214) {
            classes[0] = 8;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 1;
          }
        } else {
          classes[0] = 0;
          classes[1] = 11;
          classes[2] = 0;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[5] <= 2.709771990776062) {
      if (features[1] <= -0.45523399114608765) {
        classes[0] = 0;
        classes[1] = 64;
        classes[2] = 0;
      } else {
        if (features[5] <= 1.250968568958342) {
          classes[0] = 2;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 3;
        }
      }
    } else {
      if (features[7] <= 1.9133082032203674) {
        if (features[4] <= 1.3413300514221191) {
          if (features[7] <= 1.4055938124656677) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 7;
          } else {
            classes[0] = 44;
            classes[1] = 0;
            classes[2] = 0;
          }
        } else {
          if (features[6] <= 8.110416650772095) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 13;
          } else {
            classes[0] = 1;
            classes[1] = 0;
            classes[2] = 0;
          }
        }
      } else {
        if (features[8] <= -22.65709400177002) {
          if (features[0] <= 1.907142833340913) {
            classes[0] = 2;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 2;
            classes[2] = 0;
          }
        } else {
          if (features[2] <= 2.532495141029358) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 55;
          } else {
            if (features[9] <= 1.7885040044784546) {
              if (features[0] <= -0.8674582839012146) {
                classes[0] = 0;
                classes[1] = 0;
                classes[2] = 2;
              } else {
                classes[0] = 1;
                classes[1] = 0;
                classes[2] = 0;
              }
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 41;
            }
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[7] <= 3.2179418802261353) {
      if (features[5] <= 5.027893304824829) {
        if (features[5] <= 2.7300000190734863) {
          if (features[8] <= 17.053570992313325) {
            classes[0] = 3;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 4;
            classes[2] = 0;
          }
        } else {
          if (features[9] <= 1.3760828971862793) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 80;
          } else {
            if (features[5] <= 4.1842591762542725) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 4;
            } else {
              classes[0] = 5;
              classes[1] = 0;
              classes[2] = 0;
            }
          }
        }
      } else {
        if (features[3] <= 1.245833359658718) {
          classes[0] = 32;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 9;
        }
      }
    } else {
      if (features[1] <= -0.6563829779624939) {
        if (features[9] <= 2.6286017894744873) {
          classes[0] = 0;
          classes[1] = 62;
          classes[2] = 0;
        } else {
          if (features[9] <= 3.5551544427871704) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 2;
          } else {
            classes[0] = 0;
            classes[1] = 1;
            classes[2] = 0;
          }
        }
      } else {
        if (features[2] <= 2.5705806016921997) {
          classes[0] = 0;
          classes[1] = 2;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 33;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[6] <= 8.738935470581055) {
      if (features[8] <= -5.671463489532471) {
        if (features[5] <= 3.8760162591934204) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 3;
        } else {
          if (features[2] <= 2.8404871225357056) {
            classes[0] = 46;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 2;
          }
        }
      } else {
        if (features[3] <= 4.400000095367432) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 97;
        } else {
          classes[0] = 0;
          classes[1] = 4;
          classes[2] = 0;
        }
      }
    } else {
      if (features[3] <= 1.1166666448116302) {
        if (features[5] <= 1.9948809081688523) {
          classes[0] = 4;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 6;
        }
      } else {
        classes[0] = 0;
        classes[1] = 75;
        classes[2] = 0;
      }
    }

    return findMax(classes);
  });

  this.predict = function (features) {
    var classes = new Array(3).fill(0);
    for (var i = 0; i < trees.length; i++) {
      classes[trees[i](features)]++;
    }
    return findMax(classes);
  };
};

if (typeof process !== "undefined" && typeof process.argv !== "undefined") {
  if (process.argv.length - 2 == 10) {
    // Features:
    var features = process.argv.slice(2);

    // Prediction:
    var prediction = new RandomForestClassifier().predict(features);
    console.log(prediction);
  }
}

const datasetCollector = require("edge-ml").datasetCollector;

const sensors = {
  devicemotion: {
    listener: function (/** @type {DeviceMotionEvent} */ evt) {
      if (evt.acceleration.x === null) return;

      record(
        evt.type,
        {
          x0: evt.acceleration.x,
          y0: evt.acceleration.y,
          z0: evt.acceleration.z,
          x: evt.accelerationIncludingGravity.x,
          y: evt.accelerationIncludingGravity.y,
          z: evt.accelerationIncludingGravity.z,
          alpha: evt.rotationRate.alpha,
          beta: evt.rotationRate.beta,
          gamma: evt.rotationRate.gamma
        },
        evt.timeStamp + performance.timing.navigationStart
      );
    }
  }
};

async function start_recording(event) {
  for (const [sensor, fun] of Object.entries(sensors)) {
    // Generate collector function
    fun.collector = await datasetCollector(
      "https://app.edge-ml.org", // Backend-URL
      "u3Uwyb3Ci/eDo95p8w1gH1naFyIMEgBO8EA23TpbYSD9ya76siL2AmKK9Y/7qtrLL+ABZiuYs/73UU0PwrQk2g==", // API-Key
      sensor, // Name for the dataset
      false // True, the library provides timestamps

      //   // These two parameters can be omitted
      //   Object.assign(
      //     { participantId: document.getElementById("subject").value },
      //     defaultTags
      //   ), // Metadata: {} to omit
      //   "activities_" + document.getElementById("label").value // Labeling and label for the whole dataset. Format: {labeling}_{label}
    );
    window.addEventListener(sensor, fun.listener, true);
  }
}

async function stop_recording() {
  for (const [sensor, fun] of Object.entries(sensors)) {
    window.removeEventListener(sensor, fun.listener, true);
    try {
      await fun.collector.onComplete();
    } catch (err) {
      console.log(err);
    }

    //await fun.collector.onComplete();
  }
}

function record(eventtype, fields, eventtime) {
  // time at which the event happend
  for (const [key, value] of Object.entries(fields)) {
    sensors[eventtype].collector.addDataPoint(eventtime, key, value);
  }
}

document.getElementById("switch_collect").onchange = function () {
  if (this.checked) {
    start_recording();
  } else {
    stop_recording();
  }
};

const sensors_testing = {
  devicemotion: {
    listener: function (/** @type {DeviceMotionEvent} */ evt) {
      if (evt.acceleration.x === null) return;

      store_acc_measurements(evt.type, {
        x0: evt.acceleration.x,
        y0: evt.acceleration.y,
        z0: evt.acceleration.z,
        x: evt.accelerationIncludingGravity.x,
        y: evt.accelerationIncludingGravity.y,
        z: evt.accelerationIncludingGravity.z,
        alpha: evt.rotationRate.alpha,
        beta: evt.rotationRate.beta,
        gamma: evt.rotationRate.gamma
      });
    }
  }
};

async function start_testing(event) {
  for (const [sensor, fun] of Object.entries(sensors_testing)) {
    window.addEventListener(sensor, fun.listener, true);
  }
}

async function stop_testing() {
  for (const [sensor, fun] of Object.entries(sensors_testing)) {
    window.removeEventListener(sensor, fun.listener, true);
    //   window.removeEventListener("devicemotion", store_measurements, true);
    try {
      await fun.collector.onComplete();
    } catch (err) {
      console.log(err);
    }
  }
}

function store_acc_measurements(eventtype, fields) {
  for (const [key, value] of Object.entries(fields)) {
    if (key == "x0") {
      list_x0.push(value);
    } else if (key == "y0") {
      list_y0.push(value);
    } else if (key == "z0") {
      list_z0.push(value);
    } else if (key == "x") {
      list_x.push(value);
    } else if (key == "y") {
      list_y.push(value);
    } else if (key == "z") {
      list_z.push(value);
    } else if (key == "gamma") {
      list_gamma.push(value);
    }
  }
}

function store_measurements(evt) {
  var x0 = evt.acceleration.x;
  var y0 = evt.acceleration.y;
  var z0 = evt.acceleration.z;
  var x = evt.accelerationIncludingGravity.x;
  var y = evt.accelerationIncludingGravity.y;
  var z = evt.accelerationIncludingGravity.z;
  // var alpha = evt.rotationRate.alpha;
  // var beta = evt.rotationRate.beta;
  var gamma = evt.rotationRate.gamma;

  list_x0.push(x0);
  list_y0.push(y0);
  list_z0.push(z0);
  list_x.push(x);
  list_y.push(y);
  list_z.push(z);
  // list_alpha.push(alpha);
  // list_beta.push(beta);
  list_gamma.push(gamma);
}

function predict(measurement) {
  console.log(RandomForestClassifier(measurement));
}

function getStandardDeviation(array) {
  var n = array.length;
  var mean = array.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

function getMean(array) {
  var n = array.length;
  return array.reduce((a, b) => a + b) / n;
}
var intervalId = window.setInterval(function () {
  if (list_x0.length > 2) {
    var x0_std = getStandardDeviation(list_x0);
    var y0_std = getStandardDeviation(list_y0);
    var z0_std = getStandardDeviation(list_z0);
    var z_std = getStandardDeviation(list_z);

    var x0_mean = getMean(list_x0);
    var y0_mean = getMean(list_y0);
    var z0_mean = getMean(list_z0);
    var gamma_mean = getMean(list_gamma);
    var y_mean = getMean(list_y);
    var z_mean = getMean(list_z);

    list_x0 = [];
    list_y0 = [];
    list_z0 = [];
    list_x = [];
    list_y = [];
    list_z = [];
    list_alpha = [];
    list_beta = [];
    list_gamma = [];

    var clf = new RandomForestClassifier();
    var prediction = clf.predict([
      y0_mean,
      x0_mean,
      x0_std,
      z0_mean,
      z0_std,
      y_mean,
      z_mean,
      z_std,
      gamma_mean,
      y0_std
    ]);
    console.log(prediction);
    if (prediction == 0) {
      document.getElementById("status").innerHTML = "You are standing!";
    } else if (prediction == 1) {
      document.getElementById("status").innerHTML = "You are walking";
    } else {
      document.getElementById("status").innerHTML = "You are running!";
    }
  } else {
    document.getElementById("status").innerHTML = " Waiting...";
  }
}, 2000);

document.getElementById("switch_activity").onchange = function () {
  if (this.checked) {
    start_testing();
  } else {
    stop_testing();
  }
};

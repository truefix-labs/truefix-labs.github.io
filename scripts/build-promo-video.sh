#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
font_regular="/System/Library/Fonts/SFNS.ttf"
font_mono="/System/Library/Fonts/SFNSMono.ttf"
output_file="$project_dir/assets/truefix-studio-promo.mp4"
build_dir="$(mktemp -d)"
voice_file="$build_dir/truefix-voice.aiff"
trap 'rm -rf "$build_dir"' EXIT

narration_text="Markets move faster than isolated tools. TrueFix Studio keeps market context, evidence, strategy, risk, and execution in one auditable chain. Signals stay connected to their sources. Authorized AI and deterministic quant systems remain inside explicit boundaries. And next, the Market Twin: a future concept for comparing the consequence of each route before capital moves. TrueFix Studio. Built for clarity. Engineered for certainty."

say -v Samantha -r 162 -o "$voice_file" "$narration_text"

ffmpeg -hide_banner -loglevel warning -y \
  -f lavfi -t 4 -i "color=c=0x080b10:s=1920x1080:r=30" \
  -loop 1 -t 6 -i "$project_dir/assets/workstation.png" \
  -loop 1 -t 6 -i "$project_dir/assets/intelligence.png" \
  -loop 1 -t 6 -i "$project_dir/assets/ai-quant.png" \
  -f lavfi -t 7 -i "color=c=0x091019:s=1920x1080:r=30" \
  -f lavfi -t 5 -i "color=c=0x080b10:s=1920x1080:r=30" \
  -i "$voice_file" \
  -f lavfi -t 34 -i "aevalsrc=0.025*(sin(2*PI*110*t)+0.62*sin(2*PI*164.81*t)+0.42*sin(2*PI*220*t))*(0.82+0.18*sin(2*PI*0.10*t))+0.008*sin(2*PI*55*t):s=48000" \
  -filter_complex "
    [0:v]drawbox=x=130:y=290:w=10:h=340:color=0x74b8ec:t=fill,
      drawtext=fontfile='${font_regular}':text='TRUEFIX STUDIO':fontcolor=white:fontsize=112:x=190:y=330,
      drawtext=fontfile='${font_mono}':text='EVIDENCE-DRIVEN TRADING':fontcolor=0x74b8ec:fontsize=28:x=198:y=500,
      drawtext=fontfile='${font_mono}':text='MARKET / INTELLIGENCE / STRATEGY / RISK / EXECUTION':fontcolor=0x7f8b98:fontsize=21:x=198:y=570,
      fade=t=in:st=0:d=0.5,fade=t=out:st=3.45:d=0.55,setpts=PTS-STARTPTS[v0];
    [1:v]fps=30,scale=2140:-2,crop=1920:1080:x='(iw-ow)*t/6':y='(ih-oh)*(1-t/6)',
      drawbox=x=0:y=820:w=1920:h=260:color=black@0.72:t=fill,
      drawtext=fontfile='${font_mono}':text='01 / TRADING WORKSTATION':fontcolor=0x74b8ec:fontsize=24:x=110:y=870,
      drawtext=fontfile='${font_regular}':text='Market context to execution. One visible chain.':fontcolor=white:fontsize=48:x=110:y=930,
      fade=t=in:st=0:d=0.5,fade=t=out:st=5.45:d=0.55,setpts=PTS-STARTPTS[v1];
    [2:v]fps=30,scale=2140:-2,crop=1920:1080:x='(iw-ow)*(1-t/6)':y='(ih-oh)*t/6',
      drawbox=x=0:y=820:w=1920:h=260:color=black@0.72:t=fill,
      drawtext=fontfile='${font_mono}':text='02 / INTELLIGENCE':fontcolor=0x74b8ec:fontsize=24:x=110:y=870,
      drawtext=fontfile='${font_regular}':text='Signals stay connected to evidence and replay.':fontcolor=white:fontsize=48:x=110:y=930,
      fade=t=in:st=0:d=0.5,fade=t=out:st=5.45:d=0.55,setpts=PTS-STARTPTS[v2];
    [3:v]fps=30,scale=2140:-2,crop=1920:1080:x='(iw-ow)*t/6':y='(ih-oh)*t/6',
      drawbox=x=0:y=820:w=1920:h=260:color=black@0.72:t=fill,
      drawtext=fontfile='${font_mono}':text='03 / AUTHORIZED AI + QUANT':fontcolor=0x74b8ec:fontsize=24:x=110:y=870,
      drawtext=fontfile='${font_regular}':text='Deterministic runtime. Explicit authority.':fontcolor=white:fontsize=48:x=110:y=930,
      fade=t=in:st=0:d=0.5,fade=t=out:st=5.45:d=0.55,setpts=PTS-STARTPTS[v3];
    [4:v]drawgrid=width=120:height=120:thickness=1:color=white@0.045,
      drawbox=x=130:y=178:w=10:h=690:color=0x4dc8a0:t=fill,
      drawtext=fontfile='${font_mono}':text='04 / FUTURE CONCEPT / NOT YET AVAILABLE':fontcolor=0x4dc8a0:fontsize=24:x=190:y=190,
      drawtext=fontfile='${font_regular}':text='MARKET TWIN':fontcolor=white:fontsize=104:x=190:y=255,
      drawtext=fontfile='${font_regular}':text='Compare the consequence':fontcolor=0x74b8ec:fontsize=54:x=190:y=390,
      drawtext=fontfile='${font_regular}':text='before capital moves.':fontcolor=0x74b8ec:fontsize=54:x=190:y=455,
      drawbox=x=190:y=590:w=320:h=96:color=0x111b26@0.96:t=fill,
      drawbox=x=560:y=590:w=320:h=96:color=0x111b26@0.96:t=fill,
      drawbox=x=930:y=590:w=320:h=96:color=0x111b26@0.96:t=fill,
      drawbox=x=1300:y=590:w=320:h=96:color=0x111b26@0.96:t=fill,
      drawtext=fontfile='${font_mono}':text='ROUTE A / LIQUIDITY':fontcolor=0x9aa8b5:fontsize=18:x=225:y=627,
      drawtext=fontfile='${font_mono}':text='ROUTE B / SLIPPAGE':fontcolor=0x9aa8b5:fontsize=18:x=595:y=627,
      drawtext=fontfile='${font_mono}':text='RISK / COUNTERFACTUAL':fontcolor=0x9aa8b5:fontsize=18:x=958:y=627,
      drawtext=fontfile='${font_mono}':text='EXPLAIN / REVIEW':fontcolor=0x9aa8b5:fontsize=18:x=1343:y=627,
      drawtext=fontfile='${font_mono}':text='VISION ONLY — THIS IS NOT A CURRENT PRODUCT CAPABILITY':fontcolor=0x778695:fontsize=20:x=190:y=790,
      fade=t=in:st=0:d=0.5,fade=t=out:st=6.45:d=0.55,setpts=PTS-STARTPTS[v4];
    [5:v]drawbox=x=130:y=315:w=10:h=285:color=0x4dc8a0:t=fill,
      drawtext=fontfile='${font_regular}':text='BUILT FOR CLARITY.':fontcolor=white:fontsize=88:x=190:y=350,
      drawtext=fontfile='${font_regular}':text='ENGINEERED FOR CERTAINTY.':fontcolor=0x74b8ec:fontsize=88:x=190:y=455,
      drawtext=fontfile='${font_mono}':text='TRUEFIX STUDIO / PRE-RELEASE':fontcolor=0x7f8b98:fontsize=23:x=198:y=585,
      fade=t=in:st=0:d=0.5,fade=t=out:st=4.45:d=0.55,setpts=PTS-STARTPTS[v5];
    [v0][v1][v2][v3][v4][v5]concat=n=6:v=1:a=0,fps=30,settb=expr=1/30,setpts=N,format=yuv420p[outv];
    [6:a]aresample=48000,adelay=900|900,volume=1.3,highpass=f=80,lowpass=f=12000,apad=pad_dur=34,atrim=0:34[voice];
    [7:a]volume=0.42,afade=t=in:st=0:d=2,afade=t=out:st=31:d=3[music];
    [music][voice]amix=inputs=2:duration=longest:dropout_transition=2,loudnorm=I=-16:TP=-1.5:LRA=7[outa]
  " \
  -map "[outv]" -map "[outa]" -c:v libx264 -preset medium -crf 21 -profile:v high \
  -c:a aac -b:a 160k -ar 48000 -ac 2 -movflags +faststart "$output_file"

printf '%s\n' "Built $output_file with narration, ambient score, and the labeled Market Twin future concept"

<?php

namespace App\Http\Controllers;
use App\Models\memberModel;

use Illuminate\Http\Request;

class memberController extends Controller
{
   public function list(){
    return response()->json(memberModel::all());
   }
   public function add(Request $request){
    $memberModel=new MemberModel();
    $memberModel->name=$request->name;
    $memberModel->province=$request->province;
    $memberModel->district=$request->district;
    $memberModel->local_body=$request->local_body;
    $memberModel->ward=$request->ward;
    $memberModel->tole=$request->tole;
    $memberModel->phoneno=$request->phoneno;
    $memberModel->date=$request->date;
    $memberModel->save();
     return response()->json([
         "message" => "member added successfully"
      ], 201);
   }
}

using UnityEngine;
using System.Collections;

public class Walk : MonoBehaviour {

    public GameObject model;
    public float walkSpeed;
   

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

        model.transform.position += model.transform.TransformDirection(Vector3.back) * walkSpeed;

    }
}
